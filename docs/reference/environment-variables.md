# Environment Variables Reference

This reference lists variables used to **configure and deploy** DETO and related services. It is written for **operators, DevOps, and environment administrators** who set up instances — not for day-to-day work inside application repositories.

Values shown are taken from example env files and may differ in your environment. Confirm with your platform team before changing production settings.

## Quill CMS (Backend)

### Server

| Variable | Default |
|----------|---------|
| `HOST` | 0.0.0.0 |
| `PORT` | 1337 |

### # Secrets

| Variable | Default |
|----------|---------|
| `APP_KEYS` | (configured per environment) |
| `API_TOKEN_SALT` | /fYvqrkjCRnCmPBVcB3z2w== |
| `ADMIN_JWT_SECRET` | NOPtAs7eYObWWmF62WdEZg== |
| `TRANSFER_TOKEN_SALT` | IYANeG+jRkUilyH40ugwcA== |
| `JWT_SECRET` | nkbxYp1M8cHaEYPMFDRDtw== |

### AWS CDN + S3

| Variable | Default |
|----------|---------|
| `AWS_BUCKET_NAME` | bidgely-strapi-media |
| `AWS_ACCESS_KEY_ID` | (empty) |
| `AWS_SECRET_ACCESS_KEY` | (empty) |
| `AWS_REGION` | (empty) |
| `CDN_URL` | (empty) |
| `DEBUG_MODE` | false |
| `NODE_ENV` | production |
| `BE_USER_ROLE` | TPM |

### DB

| Variable | Default |
|----------|---------|
| `DATABASE_HOST` | (empty) |
| `DATABASE_PORT` | 3306 |
| `DATABASE_NAME` | bidgely_cms |
| `DATABASE_USERNAME` | admin |
| `DATABASE_PASSWORD` | admin |
| `DATABASE_POOL_MIN` | 2 |
| `DATABASE_POOL_MAX` | 10 |
| `DATABASE_SSL` | false |
| `DATABASE_DEBUG` | false |

### Redis

| Variable | Default |
|----------|---------|
| `REDIS_HOST` | (empty) |
| `REDIS_PORT` | (empty) |
| `REDIS_PASSWORD` | (empty) |
| `REDIS_DB` | (empty) |

### Auto db migrations

| Variable | Default |
|----------|---------|
| `AUTO_DB_MIGRATION` | false |

## Quill Frontend

### General

| Variable | Default |
|----------|---------|
| `REACT_APP_ENV` | DEV |
| `REACT_APP_HOME_PAGE` | DETO |
| `REACT_APP_PINGPONG_API_URL` | (configured per environment) |
| `REACT_APP_CMS_API_URL` | https://cms-nonprod.bidgely.com/api |
| `REACT_APP_TOOL_API_URL` | (configured per environment) |
| `REACT_APP_CX_WEB_URL` | https://avista-dev2.bidgely.com |
| `REACT_APP_ENV_MANAGER_API_URL` | (configured per environment) |
