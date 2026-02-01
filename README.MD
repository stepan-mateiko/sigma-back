# Sigma Shop – Backend API

Backend service for a simple e-commerce application built with **Node.js**, **Express**, and **MongoDB**.  
Provides APIs for managing products and customer orders.

---

## Features

- Fetch product list
- Create new orders
- Fetch all orders
- Delete orders by ID
- Serve static product images
- MongoDB Atlas integration
- Environment-based configuration using `.env`

---

## Tech Stack

- Node.js
- Express
- MongoDB (native driver)
- Axios
- CORS
- Nodemon
- dotenv

---

## Installation

```bash
git clone https://github.com/your-username/sigma-backend.git
cd backend
npm install
```

---

## Environment Variables

Create a `.env` file in the root:

```env
PORT=5050
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/Sigma
```

---

## Run the server

```bash
npm start
```

Server will run at:

```
http://localhost:5050
```

---

## API Endpoints

### Products

- `GET /api/products`

### Orders

- `GET /api/orders`
- `POST /api/orders`
- `DELETE /api/orders/:id`

---

## Project Structure

```
backend/
│
├── api/
│   ├── productApi.js
│   └── orderApi.js
│
├── db/
│   └── db.js
│
├── uploads/
│   └── product images
│
├── index.js
├── .env
├── package.json
└── README.md

```

---

## Improvements planned

- Order deletion from UI
- Input validation
- Pagination
- Authentication
- Refactor to MVC structure

---

## Author

Stepan Mateiko
Junior Frontend Developer @ EPAM
(Backend project for learning & portfolio purposes)

```

```
