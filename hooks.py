"""
Build MkDocs `nav` from YAML under docs/_data/.

Section files follow the same conventions as feature-map.yml entries:
  - display_name (nav label; section root = tab title)
  - description (optional; ignored by MkDocs, used for docs / future tooling)
  - confluence_pm_page_ids / confluence_dev_page_ids (optional; seed uses them)
  - prompt_profile (optional; seed only)
  - page_doc (path under docs/ for a leaf)
  - pages (optional slug-keyed dict of child nodes, same shape)

feature-map.yml: top-level display_name (tab) + features: { slug: { display_name, feature_doc, ... } }
"""

from __future__ import annotations

from pathlib import Path
from typing import Any

import yaml

DEFAULT_ORDER = [
    "getting_started",
    "features",
    "api_reference",
    "runbooks",
    "reference",
]


def _load_yaml(path: Path, *, required: bool = True) -> dict[str, Any]:
    if not path.is_file():
        if not required:
            return {}
        raise FileNotFoundError(f"Nav config not found: {path}")
    with path.open(encoding="utf-8") as f:
        data = yaml.safe_load(f)
    return data if isinstance(data, dict) else {}


def pages_dict_to_mkdocs_nav(pages: dict[str, Any]) -> list[Any]:
    """Slug-keyed `pages` dict → MkDocs nav list (order = YAML key order)."""
    if not pages:
        return []
    out: list[Any] = []
    for slug, raw in pages.items():
        if not isinstance(raw, dict):
            raise ValueError(f"Page {slug!r} must be a mapping, got {type(raw)}")
        name = raw.get("display_name")
        if name is None:
            raise ValueError(f"Missing display_name for page {slug!r}")
        page_doc = raw.get("page_doc")
        nested = raw.get("pages")
        nested_dict = nested if isinstance(nested, dict) else {}

        if nested_dict:
            if page_doc:
                children: list[Any] = [str(page_doc)]
                children.extend(pages_dict_to_mkdocs_nav(nested_dict))
                out.append({str(name): children})
            else:
                out.append({str(name): pages_dict_to_mkdocs_nav(nested_dict)})
        elif page_doc:
            out.append({str(name): str(page_doc)})
        else:
            raise ValueError(
                f"Page {slug!r} must define page_doc and/or non-empty pages"
            )
    return out


def _nav_section_file(docs_dir: Path, filename: str) -> dict[str, Any]:
    data = _load_yaml(docs_dir / "_data" / filename)
    tab = data.get("display_name")
    if not tab:
        raise ValueError(f"{filename} requires display_name (section tab title)")
    pages = data.get("pages")
    if not isinstance(pages, dict):
        raise ValueError(f"{filename} requires a slug-keyed pages: mapping")
    return {str(tab): pages_dict_to_mkdocs_nav(pages)}


def _nav_getting_started(docs_dir: Path) -> dict[str, Any]:
    return _nav_section_file(docs_dir, "getting-started.yml")


def _nav_features(docs_dir: Path) -> dict[str, Any]:
    fm = _load_yaml(docs_dir / "_data/feature-map.yml")
    tab = fm.get("display_name") or "Features"
    features = fm.get("features") or {}
    items: list[dict[str, str]] = []
    for _key, meta in features.items():
        if not isinstance(meta, dict):
            continue
        name = meta.get("display_name")
        doc = meta.get("feature_doc")
        if not name or not doc:
            raise ValueError(f"Feature entry missing display_name or feature_doc: {_key!r}")
        items.append({str(name): str(doc)})
    return {str(tab): items}


def _nav_api_reference(docs_dir: Path) -> dict[str, Any]:
    return _nav_section_file(docs_dir, "api-reference.yml")


def _nav_runbooks(docs_dir: Path) -> dict[str, Any]:
    return _nav_section_file(docs_dir, "runbooks.yml")


def _nav_reference(docs_dir: Path) -> dict[str, Any]:
    return _nav_section_file(docs_dir, "reference.yml")


_BUILDERS = {
    "getting_started": _nav_getting_started,
    "features": _nav_features,
    "api_reference": _nav_api_reference,
    "runbooks": _nav_runbooks,
    "reference": _nav_reference,
}


def on_config(config: Any, **kwargs: Any) -> Any:
    docs_dir = Path(config["docs_dir"]).resolve()
    site = _load_yaml(docs_dir / "_data/site-nav.yml", required=False)
    order = site.get("order")
    if not isinstance(order, list) or not order:
        order = DEFAULT_ORDER

    nav: list[dict[str, Any]] = []
    for section_id in order:
        sid = str(section_id)
        builder = _BUILDERS.get(sid)
        if builder is None:
            raise ValueError(f"Unknown section id in site-nav.yml order: {sid!r}")
        nav.append(builder(docs_dir))

    config["nav"] = nav
    return config
