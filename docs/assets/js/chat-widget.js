(function () {
  "use strict";

  const CHAT_API_URL = "http://localhost:3001";
  const history = [];

  // Create DOM elements
  function init() {
    // Overlay
    const overlay = document.createElement("div");
    overlay.className = "chat-overlay";
    overlay.addEventListener("click", togglePanel);
    document.body.appendChild(overlay);

    // FAB
    const fab = document.createElement("button");
    fab.className = "chat-fab";
    fab.innerHTML = "&#128172;";
    fab.title = "Ask about docs";
    fab.addEventListener("click", togglePanel);
    document.body.appendChild(fab);

    // Panel
    const panel = document.createElement("div");
    panel.className = "chat-panel";
    panel.id = "chat-panel";
    panel.innerHTML = `
      <div class="chat-panel-header">
        <h3>Ask Docs</h3>
        <button class="chat-close-btn" id="chat-close">&times;</button>
      </div>
      <div class="chat-messages" id="chat-messages">
        <div class="chat-message assistant">
          Hi! Ask me anything about the Bidgely Quill documentation.
        </div>
      </div>
      <div class="chat-input-area">
        <input type="text" class="chat-input" id="chat-input" placeholder="Ask a question..." />
        <button class="chat-send-btn" id="chat-send">Send</button>
      </div>
    `;
    document.body.appendChild(panel);

    // Event listeners
    document.getElementById("chat-close").addEventListener("click", togglePanel);
    document.getElementById("chat-send").addEventListener("click", sendMessage);
    document.getElementById("chat-input").addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && panel.classList.contains("open")) {
        togglePanel();
      }
    });
  }

  function togglePanel() {
    const panel = document.getElementById("chat-panel");
    const overlay = document.querySelector(".chat-overlay");
    const isOpen = panel.classList.toggle("open");
    overlay.classList.toggle("visible", isOpen);
    if (isOpen) {
      document.getElementById("chat-input").focus();
    }
  }

  function addMessage(role, content, sources) {
    const messages = document.getElementById("chat-messages");
    const div = document.createElement("div");
    div.className = "chat-message " + role;
    div.innerHTML = formatMarkdown(content);

    if (sources && sources.length > 0) {
      const srcDiv = document.createElement("div");
      srcDiv.className = "chat-sources";
      srcDiv.innerHTML =
        "<strong>Sources:</strong> " +
        sources
          .map(function (s) {
            return '<a href="' + s + '" target="_blank">' + s.replace(/^\/|\/$/g, "").split("/").pop() + "</a>";
          })
          .join(" ");
      div.appendChild(srcDiv);
    }

    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function showTyping() {
    const messages = document.getElementById("chat-messages");
    const div = document.createElement("div");
    div.className = "chat-typing";
    div.id = "chat-typing";
    div.textContent = "Thinking...";
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function hideTyping() {
    const el = document.getElementById("chat-typing");
    if (el) el.remove();
  }

  async function sendMessage() {
    const input = document.getElementById("chat-input");
    const sendBtn = document.getElementById("chat-send");
    const question = input.value.trim();
    if (!question) return;

    input.value = "";
    sendBtn.disabled = true;
    addMessage("user", question);
    history.push({ role: "user", content: question });
    showTyping();

    try {
      const response = await fetch(CHAT_API_URL + "/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: question, history: history.slice(-6) }),
      });

      hideTyping();

      if (!response.ok) {
        addMessage("assistant", "Sorry, something went wrong. Please try again.");
        return;
      }

      const data = await response.json();
      addMessage("assistant", data.answer, data.sources);
      history.push({ role: "assistant", content: data.answer });
    } catch (err) {
      hideTyping();
      addMessage("assistant", "Could not reach the chat server. Make sure it's running on " + CHAT_API_URL);
    } finally {
      sendBtn.disabled = false;
      document.getElementById("chat-input").focus();
    }
  }

  function formatMarkdown(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
      .replace(/\n\* /g, "\n&bull; ")
      .replace(/\n/g, "<br>");
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
