# Multi-Agent Math Assistant Frontend

A responsive web interface for interacting with the Multi-Agent Math Assistant API.

The application provides a modern chat experience where users can submit mathematical questions in Portuguese, English, or Spanish. The frontend communicates with a FastAPI backend responsible for orchestrating specialized agents, contextual memory, language detection, mathematical tools, and natural-language responses.

## Overview

This repository contains the frontend application for the Multi-Agent Math Assistant.

The project was developed with React, TypeScript, and Vite. It is served by Nginx in Docker and uses a reverse proxy to communicate with the FastAPI backend.

The application includes:

- Demo login screen
- Mathematical chat interface
- Contextual conversation display
- Message counter
- Last mathematical result
- Last user message
- Conversation reset
- Local demo session
- Loading and error handling
- Multi-language support
- Responsive interface
- Docker and Docker Compose support

## Demo Login

The login page is intended only to demonstrate frontend form handling and local session behavior.

It does not provide real authentication.

The application:

- Accepts any non-empty username and password
- Stores only the username in the browser
- Does not store the password
- Does not validate credentials with the backend
- Uses `localStorage` to preserve the local demo session

This implementation must not be considered secure authentication.

## Technologies

- React
- TypeScript
- Vite
- Axios
- CSS
- Nginx
- Docker
- Docker Compose

## Application Architecture

The frontend follows a component-based structure with separated responsibilities.

```text
Browser
   |
   v
React Application
   |
   v
Axios HTTP Client
   |
   v
Nginx Reverse Proxy
   |
   v
FastAPI Backend
   |
   v
Chat Orchestrator
   |
   +-- Expression Interpreter Agent
   +-- Mathematical Agent
   +-- Writer Agent
   +-- Conversation Memory
   +-- Mathematical Tools
```

When running with Docker, the browser sends requests to:

```text
/api/chat
```

Nginx forwards them internally to:

```text
http://backend:8000/chat
```

## Prerequisites

For local development:

- Node.js 20 or later
- npm
- Multi-Agent Math Assistant backend running locally

For Docker execution:

- Docker
- Docker Compose

## Environment Configuration

Create a `.env` file in the frontend root directory:

```env
VITE_API_URL=http://127.0.0.1:8000
```

This value is used when running the frontend locally with Vite.

The `.env` file must not be committed.

An `.env.example` file should be included in the repository:

```env
VITE_API_URL=http://127.0.0.1:8000
```

## Running Locally

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will usually be available at:

```text
http://127.0.0.1:5173
```

The backend must be running at:

```text
http://127.0.0.1:8000
```

## Available Scripts

Start the development server:

```bash
npm run dev
```

Generate the production build:

```bash
npm run build
```

Run ESLint:

```bash
npm run lint
```

Preview the production build locally:

```bash
npm run preview
```

## Backend Dependency

This frontend depends on the Multi-Agent Math Assistant backend.

The backend must expose the following endpoint:

```http
POST /chat
```

Request:

```json
{
  "message": "What is seven plus two?"
}
```

Response:

```json
{
  "response": "The result of this sum is 9.",
  "result": 9
}
```

The backend also exposes:

```http
GET /health
```

Expected response:

```json
{
  "status": "healthy"
}
```

## Running with Docker Compose

The Docker Compose configuration is stored in:

```text
infra/docker-compose.yml
```

The current configuration assumes the frontend and backend repositories are organized as follows:

```text
projects/
├── chatbot/
│   ├── Dockerfile
│   ├── .env
│   ├── main.py
│   ├── pyproject.toml
│   └── app/
│
└── frontend-agent/
    └── multi-agent-math-assistant-frontend/
        ├── Dockerfile
        ├── docker/
        │   └── nginx.conf
        └── infra/
            └── docker-compose.yml
```

Enter the infrastructure directory:

```bash
cd infra
```

Build and start the services:

```bash
docker compose up --build
```

Run the services in the background:

```bash
docker compose up --build -d
```

Check the container status:

```bash
docker compose ps
```

View all logs:

```bash
docker compose logs -f
```

View backend logs:

```bash
docker compose logs -f backend
```

View frontend logs:

```bash
docker compose logs -f frontend
```

Stop and remove the containers:

```bash
docker compose down
```

## Docker URLs

After starting Docker Compose:

Frontend:

```text
http://127.0.0.1:5173
```

Backend Swagger documentation:

```text
http://127.0.0.1:8000/docs
```

Backend health check:

```text
http://127.0.0.1:8000/health
```

## Rebuilding Only the Frontend

When only frontend files are changed, rebuild only the frontend service:

```bash
cd infra
docker compose up -d --build frontend
```

If the browser still displays an older build, perform a hard refresh:

```text
Ctrl + Shift + R
```

## Folder Structure

```text
multi-agent-math-assistant-frontend/
├── docker/
│   └── nginx.conf
├── infra/
│   ├── docker-compose.yml
│   └── README.md
├── public/
├── src/
│   ├── app/
│   │   └── layout/
│   ├── assets/
│   ├── components/
│   │   ├── auth/
│   │   ├── chat/
│   │   ├── common/
│   │   ├── dashboard/
│   │   └── ui/
│   ├── config/
│   ├── constants/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
├── .dockerignore
├── .env.example
├── .gitignore
├── Dockerfile
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
└── vite.config.ts
```

## Main Directories

### `src/app`

Contains application-level structure, including the main layout.

### `src/components`

Contains reusable interface components.

```text
auth/
```

Contains demo login components.

```text
chat/
```

Contains chat input, history, and message components.

```text
common/
```

Contains shared layout components such as the header and sidebar.

```text
dashboard/
```

Contains session summaries, usage tips, and resource information.

```text
ui/
```

Contains small reusable interface elements.

### `src/config`

Contains environment and application configuration.

### `src/hooks`

Contains custom React hooks, including chat state and API interaction logic.

### `src/pages`

Contains application pages such as the login and chat pages.

### `src/services`

Contains HTTP communication logic.

```text
api.ts
```

Creates the configured Axios instance.

```text
chat.service.ts
```

Communicates with the backend chat endpoint.

### `src/styles`

Contains global styles and design variables.

### `src/types`

Contains shared TypeScript types for chat messages and API contracts.

### `docker`

Contains the Nginx reverse proxy configuration.

### `infra`

Contains the Docker Compose configuration used to run the frontend and backend together.

## Conversation Flow

```text
User submits a message
        |
        v
ChatInput
        |
        v
useChat
        |
        v
chat.service
        |
        v
Axios
        |
        v
Nginx /api proxy
        |
        v
FastAPI /chat
        |
        v
Multi-agent orchestration
        |
        v
JSON response
        |
        v
Chat history update
```

## Current Limitations

- The login is only a frontend demonstration.
- There is no real authentication or authorization.
- The username is stored locally in the browser.
- The backend currently uses an in-memory conversation.
- Backend state may be shared if multiple users access the same running instance.
- Conversation data is not persisted after the backend restarts.

## Security

Never commit:

- `.env` files
- API keys
- credentials
- private tokens

The frontend must never receive the OpenAI API key.

The API key must exist only in the backend environment.

## Future Improvements

Possible future enhancements include:

- Real authentication
- Independent conversation sessions
- Backend conversation reset endpoint
- Persistent chat history
- Auto-scroll behavior
- Copy-message button
- Typing indicator
- Improved error messages
- Automated frontend tests
- CI/CD pipeline
- Cloud deployment

## License

This project is intended for educational and portfolio purposes.