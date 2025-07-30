# temp.nodejs

A starter template for building RESTful APIs with Node.js, Express, and Mongoose. Includes middleware for admin authentication, user authentication, and verification.

## Features

- Express server setup
- MongoDB integration with Mongoose
- Modular route structure
- Middleware for:
    - `verifyAuth`
- Controller/Routes for:
    - `adminAuth`
    - `userAuth`

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

```bash
git clone <repository-url>
cd Backend-Template
npm install
```

### Environment Variables

Create a `.env` file:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Running the Server

```bash
npm start
```

## Project Structure

```
├── src/
│   ├── middleware/
│   │   └── verifyAuth.js
│   ├── models/
│   │   ├── adminModel.js
│   │   ├── userModel.js
│   ├── routes/
│   │   ├── adminAuthRoute.js
│   │   ├── userAuthRoute.js
│   ├── controllers/
│   │   ├── adminAuthController.js
│   │   ├── userAuthController.js
│   ├── modules/
│   │   ├── bd.js
│   └── app.js
├── .env
├── package.json
└── README.md
```

## Middleware Overview

- **adminAuth**: Protects admin routes.
- **userAuth**: Protects user routes.
- **verifyAuth**: Verifies authentication tokens.

## License

MIT