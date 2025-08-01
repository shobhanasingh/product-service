Build a standalone Product microservice that manages product data in an e-commerce setup. This service will be consumed by other microservices like Order or the frontend.

📦 Requirements
📁 Tech Stack:
Node.js with Express

MongoDB with Mongoose

Use .env for sensitive configs

JWT Middleware for protecting certain routes

Follow RESTful standards

Use Postman or cURL to test

🔐 Authorization
Authenticated users can view products

Only admin users can POST, PUT, DELETE products

Use a mock middleware or extract role from JWT (user.role === 'admin')

🚀 Endpoints to Implement
Method Endpoint Auth Required Role Description
GET /products ✅ any Get all products
GET /products/:id ✅ any Get product by ID
POST /products ✅ admin Create new product
PUT /products/:id ✅ admin Update existing product
DELETE /products/:id ✅ admin Delete product
