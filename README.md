# Cozzy Clothing - Backend API Documentation

This is the complete API documentation and guide for the backend of **Cozzy Clothing**, a t-shirt selling website built using Node.js, Express, and MongoDB.

---

## 📦 Project Setup

### 🛠 Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **dotenv**
- **cors**
- **express-rate-limit**

### 📁 Folder Structure
```
cozzy-backend/
├── models/
│   └── tshirtModel.js
├── routes/
│   └── tshirtRoutes.js
├── middleware/
│   └── auth.js (optional for secured endpoints)
├── .env
├── server.js
└── package.json
```

---

## ⚙️ Configuration

### .env File
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## 🚀 Run the Server
```bash
node server.js
```
Expected Output:
```
MongoDB Connected
Server running on port 5000
```

---

## 🔐 Middleware for Security

### CORS
```js
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
```

### Rate Limiting
```js
const rateLimit = require('express-rate-limit');
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use('/api/', apiLimiter);
```

---

## 📘 API Endpoints

Base URL: `http://localhost:5000/api/tshirts`

### 1. Get All T-shirts
```http
GET /api/tshirts
```
**Response:** Array of t-shirt objects.

### 2. Get Single T-shirt by ID
```http
GET /api/tshirts/:id
```
**Response:** T-shirt object.

### 3. Create a New T-shirt
```http
POST /api/tshirts
```
**Request Body:**
```json
{
  "title": "Cozzy Tee",
  "price": 499,
  "size": "M",
  "color": "Black",
  "stock": 50,
  "imageUrl": "https://example.com/image.jpg"
}
```
**Response:** Created t-shirt object.

### 4. Update a T-shirt
```http
PUT /api/tshirts/:id
```
**Request Body:** Fields to update (partial or full).
```json
{
  "price": 599,
  "stock": 45
}
```
**Response:** Updated t-shirt object.

### 5. Delete a T-shirt
```http
DELETE /api/tshirts/:id
```
**Response:**
```json
{ "message": "Tshirt deleted successfully" }
```

---

## 🧠 Tshirt Model Schema
```js
const tshirtSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: String, required: true },
  color: { type: String, required: true },
  stock: { type: Number, required: true },
  imageUrl: { type: String }
}, { timestamps: true });
```

---

## 🔐 Optional Auth Middleware (if added later)
```js
module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token || token !== 'Bearer your_secret_key') {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};
```
Apply this middleware to protect routes.

---

## 🧪 Testing Tips
Use **Postman** or **Thunder Client** for API requests.

Make sure:
- Your MongoDB URI is working
- Your server is running
- You’re sending correct data format (JSON)

---

## 📌 Prompt to Remember This API in the Future

```
Remember the Cozzy Clothing API project that includes a full Express.js backend with CRUD operations for t-shirts, using MongoDB, rate limiting, CORS, optional auth middleware, and image URLs stored in the schema. The project folder has separate model, routes, and config files.
```

