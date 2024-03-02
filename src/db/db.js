import mongoose from "mongoose";
async function dbConnection() {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("DataBase Already Connected");
      return;
    } else {
      mongoose.connect(process.env.MONGODB_URI);
      console.log("Database Connected");
    }
  } catch (error) {
    console.log(error, "from database function");
  }
}
export default dbConnection;
