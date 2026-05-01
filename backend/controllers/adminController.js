import User from "../models/User.js";
import Car from "../models/Cars.js";
import fs from "fs";
import imagekit from "../configs/imageKit.js";
import Booking from "../models/Booking.js";


export const changeRoleToAdmin = async (req, res) => {
  try {
    const { _id } = req.user;

    await User.findByIdAndUpdate(_id, { role: "admin" });

    res.json({ success: true, message: "Now you can list cars" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export const addCar = async (req, res) => {
  try {
    const { _id } = req.user;
    const car = JSON.parse(req.body.carData);
    const imageFile = req.file;

    if (!imageFile) {
      return res.status(400).json({ success: false, message: "Image file is required" });
    }

    const fileBuffer = fs.readFileSync(imageFile.path);
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/cars",
    });

    const optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { width: "1280" },
        { quality: "auto" },
        { format: "webp" },
      ],
    });

    const image = optimizedImageUrl;
    await Car.create({ ...car, admin: _id, image });

    res.json({ success: true, message: "Car Added" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAdminCars = async (req, res) => {
  try {
    const { _id } = req.user;
    const cars = await Car.find({ admin : _id });
    res.json({ success: true, cars });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export const toggleCarAvailability = async (req, res) => {
  try {
    const { _id } = req.user;
    const { carId } = req.body;
    const car = await Car.findById(carId);

    if (car.admin.toString() !== _id.toString()) {
      return res.json({ success: false, message: "Unauthorized" });
    }

    car.isAvailable = !car.isAvailable;
    await car.save();

    res.json({ success: true, message: "Availability Toggled" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};


export const deleteCar = async (req, res) => {
  try {
    const { _id } = req.user;
    const { carId } = req.body;
    const car = await Car.findById(carId);

    if (car.admin.toString() !== _id.toString()) {
      return res.json({ success: false, message: "Unauthorized" });
    }

    car.admin = null;
    car.isAvailable =false;

    await car.save();

    res.json({ success: true, message: "Car Removed" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }

};

export const getDashboardData = async (req, res) => {
  try {
    const { _id, role } = req.user;

    if (role !== 'admin') {
      return res.json({ success: false, message: "Unauthorized" });
    }

    const cars = await Car.find({ admin: _id });


const bookings = await Booking.find({ admin: _id })
  .populate('car')
  .sort({ createdAt: -1 });

const pendingBookings = await Booking.find({
  admin: _id,
  status: "pending"
});

const completedBookings = await Booking.find({
  admin: _id,
  status: "confirmed"
});
 
const monthlyRevenue = bookings
  .slice()
  .filter(booking => booking.status === 'confirmed')
  .reduce((acc, booking) => acc + booking.price, 0);

const dashboardData = {
  totalCars: cars.length,
  totalBookings: bookings.length,
  pendingBookings: pendingBookings.length,
  completedBookings: completedBookings.length,
  recentBookings: bookings.slice(0, 3),
  monthlyRevenue
};

res.json({ success: true, dashboardData });
 

  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export const updateUserImage =async(req,res)=>{
  try {
     const { _id } = req.user;
   
    const imageFile = req.file;

    const fileBuffer = fs.readFileSync(imageFile.path);
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/users",
    });

    const optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { width: "500" },
        { quality: "auto" },
        { format: "webp" },
      ],
    });

    const image = optimizedImageUrl;
    await User.findByIdAndUpdate (_id,{image});
    res.json ({success :true , message:"Image Updated"})
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });

  }
}
