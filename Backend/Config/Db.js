import mongoose from "mongoose";

const Dbconnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MongoDb_URL);
  } catch (error) {
    return;
  }
};
export default Dbconnection;
