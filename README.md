echo # Car-Rental-Website

A full-stack car rental app built with React, Node.js, Express, and MongoDB. Browse cars, book rentals, and manage bookings easily.

##  Features

- User authentication & dashboard
- Browse and search cars
- Easy booking system
- Admin panel to manage cars & bookings
- Professional image hosting with ImageKit
- Responsive design for all devices

## Tech Stack

**Frontend:** React + Vite + CSS + ImageKit  
**Backend:** Node.js + Express + MongoDB + ImageKit SDK

##  Quick Setup

### Prerequisites
- Node.js (v14+)
- MongoDB account
- ImageKit account

### 1. Backend Setup
```bash
cd backend
npm install
```

Create `.env` file in backend:
```env
MONGODB_URI=your_mongodb_url
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint
PORT=4546
```

### 2. Frontend Setup
```bash
cd frontend
npm install
```

Create `.env` file in frontend:
```env
VITE_IMAGEKIT_PUBLIC_KEY=your_public_key
VITE_IMAGEKIT_URL_ENDPOINT=your_url_endpoint
VITE_API_URL=http://localhost:4546
```

## Run the App

**Start Backend** (in `backend` folder):
```bash
npm run server
```

**Start Frontend** (in `frontend` folder):
```bash
npm run dev
```

- Frontend: http://localhost:5173
- Backend: http://localhost:4546

##  Project Structure

```
CarRent/
├── frontend/          # React app
│   └── src/
│       ├── components/
│       ├── pages/
│       └── context/
└── backend/           # Express server
    ├── controllers/
    ├── models/
    ├── routes/
    └── configs/
```

## ImageKit Setup

1. Sign up at [ImageKit.io](https://imagekit.io)
2. Get your API keys
3. Add to both `.env` files

## Key Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/cars` | Get all cars |
| POST | `/api/bookings` | Create booking |
| GET | `/api/bookings` | Get user bookings |
| POST | `/api/admin/cars` | Add car (admin) |
| PUT | `/api/admin/cars/:id` | Update car (admin) |

##  Troubleshooting

| Issue | Solution |
|-------|----------|
| Port already in use | Change PORT in `.env` |
| Images not loading | Check ImageKit credentials |
| Backend not connecting | Verify `VITE_API_URL` and backend is running |
| MongoDB error | Check connection string & network access |




