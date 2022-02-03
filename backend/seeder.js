import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
// Needed to remove data
import Order from "./models/orderModel.js";

import connectDB from "./config/db.js";

// Load environment config
dotenv.config();

// Connect to mongo DB
connectDB();

const deleteAllData = async () => {
  await Order.deleteMany();
  await Product.deleteMany();
  await User.deleteMany();
};

const destroyData = async () => {
  try {
    await deleteAllData();

    console.log("Data Destroyed".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const importData = async () => {
  try {
    await deleteAllData();

    const createdUsers = await User.insertMany(users);

    const adminUserId = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUserId };
    });

    await Product.insertMany(sampleProducts);

    console.log("Data Imported".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
