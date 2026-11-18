# Pintreast Clone

A Pinterest-inspired visual discovery app built with React, Vite, and Tailwind CSS. Browse a masonry-style image feed, open post details, and explore login, sign-up, and create-pin interfaces.

## Features

- Responsive image feed with post cards
- Individual post pages with creator, comments, and follow/save controls
- Login and sign-up demo screens
- Create-pin form with image preview and drag-and-drop upload
- Separate Express backend starter

> Login, sign-up, follow, save, and publishing are currently interface/demo behavior. User accounts and posts are not persisted to a database.

## Tech stack

- React and JavaScript
- Vite
- Tailwind CSS and CSS
- React Router
- Express and EJS

## Requirements

- Node.js and npm

## Run the frontend

```bash
cd frontend
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Run the backend

In a separate terminal:

```bash
cd backend
npm install
npm start
```

The Express server listens on port `3000` by default. Set the `PORT` environment variable to use a different port.

## Build and lint the frontend

From the `frontend` directory:

```bash
npm run build
npm run lint
```

## Repository languages

GitHub detects the source languages automatically. The repository currently includes JavaScript, CSS, HTML, and EJS.
