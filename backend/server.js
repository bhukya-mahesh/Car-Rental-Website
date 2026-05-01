import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js"
import adminRouter from "./routes/adminRoutes.js"
import bookingRouter from "./routes/bookingRoutes.js";

const app = express();

await connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("server is running");
});
app.use('/api/user',userRouter)
app.use('/api/admin',adminRouter)
app.use('/api/bookings',bookingRouter)

const PORT = process.env.PORT || 4546;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});