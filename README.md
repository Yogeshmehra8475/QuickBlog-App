# QuickBlog

QuickBlog is a full-stack blogging platform built with React (Vite) for the client and Express/MongoDB for the server. It supports rich-text blogs, AI-powered content generation, image uploads, admin dashboard, and comment moderation.

## Features

- Modern React frontend with Tailwind CSS
- Admin dashboard for blog and comment management
- AI-powered blog content generation (Google Gemini API)
- Image uploads via ImageKit
- JWT-based authentication for admin routes
- Comment approval workflow
- Responsive design

## Project Structure

```
client/      # React frontend (Vite)
server/      # Express backend (Node.js, MongoDB)
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB Atlas account
- ImageKit account
- Google Gemini API key

### Setup

#### 1. Clone the repository

```sh
git clone https://github.com/yourusername/quickblog.git
cd quickblog
```

#### 2. Install dependencies

```sh
cd server
npm install
cd ../client
npm install
```

#### 3. Configure environment variables

Edit [`server/.env`](server/.env) with your credentials for MongoDB, ImageKit, and Gemini API.

#### 4. Run the server

```sh
cd server
npm run server
```

#### 5. Run the client

```sh
cd client
npm run dev
```

## Deployment

- Vercel configuration files are included for both client and server.
- For production, set environment variables securely.

## License

ISC

---

Made by Yogesh
