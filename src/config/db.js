// const { MongoClient } = require('mongodb');
// const dotenv = require('dotenv');

// // Load environment variables from .env file
// dotenv.config();

// // Use the DB_URI from the environment variables
// const uri = process.env.MONGODB_URI;

// if (!uri) {
//   console.error('DB_URI is not defined in the environment variables.');
//   process.exit(1); // Exit the process with an error code
// }

// // Create a new MongoClient
// const client = new MongoClient(uri);

// // Connect to the MongoDB server
// async function connectToMongoDB() {
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// }

// connectToMongoDB();

// module.exports = client;
const mongoose = require("mongoose");
const connectionString = process.env.MONGO_URI;

const connectDatabase = async () => {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connection established to MongoDB database successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
  }
};

module.exports = connectDatabase;
