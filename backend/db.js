const mongoose = require('mongoose');

require('dotenv').config();  
const mongoURL = process.env.MONGO_URI;

const mongoDB = async () => {
  try {
    const connection = await mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");

    const fetched_data = await mongoose.connection.db.collection("food_data").find({}).toArray();
    console.log("Fetched Data:", fetched_data);

    const foodCategory = await mongoose.connection.db.collection("food_category").find({}).toArray();
    console.log("Fetched Categories:", foodCategory);

    global.food_items = fetched_data;
    global.foodCategory = foodCategory;

  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = mongoDB;

