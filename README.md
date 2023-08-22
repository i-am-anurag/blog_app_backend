# Dynamic Blog Backend with Admin Authentication and Cloudinary Integration

This project implements the backend for a dynamic blog page where administrators can create, edit, and delete blogs with various media types using Cloudinary for media storage. User authentication is enabled using JWT (JSON Web Tokens).

## Features

- Admin authentication with JWT
- Role-based access control (admin and user roles)
- Create, edit, and delete blogs with various media types (images, videos, GIFs, URLs)
- Cloudinary integration for media storage
- RESTful API endpoints

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js 14 and above and npm (Node Package Manager)
- MongoDB instance
- Cloudinary account for media storage

### Installation

1. Clone the repository:
   git clone https://github.com/i-am-anurag/blog_app_backend.git

2. Install dependencies:
   npm install

3. Set up environment variables:
   Create a .env file in the project root directory and add the following variables:
    PORT=3000
    JWT_SECRET=your_jwt_secret
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret

4. Start the backend server:
    To test out the app locally run `npm start` to launch the local development server or use Postman to make requests against it's routes

### Usage
- Admin Role:
   - Administrators can access the admin panel by logging in with admin credentials.
   - They have the privilege to create, edit, and delete blogs from the admin dashboard.
- User Role:
   - Users can view and interact with blogs.
   - They can like, comment on, and share blogs.

## API Endpoints

| Method | Endpoint              | Description                           | Access Control      |
|:-------|:----------------------|:--------------------------------------|---------------------|
| POST   | /api/auth/signup      | Register new user                     | Public              |
| POST   | /api/auth/login       | User login                            | Public              |
| POST   | /api/blogs            | Create a new blog (Admin only)        | Private, Admin only |
| GET    | /api/blogs            | Get all blogs                         | Public              |
| PUT    | /api/blogs/:id        | Update a blog (Admin only)            | Private, Admin only |
| DELETE | /api/blogs/:id        | Delete a blog (Admin only)            | Private, Admin only |
| POST   | /api/blogs/likes/toggle|  Like a blog                         | Private             |
| POST   | /api/blogs/comment    | Add a comment to a blog               | Private             |
| POST   | /api/blogs/:id/share  | Share a blog                          | Private             |


## Technologies Used
- Node.js 14
- Express.js
- MongoDB
- JWT (JSON Web Tokens)
- Cloudinary
- Multer (for media upload)
