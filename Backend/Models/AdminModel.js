import mongoose from "mongoose";

const Adminschema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      trim: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
    Phone: {
      type: Number,
      required: true,
    },
    Role: {
      type: String,
      default: "1",
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Admins", Adminschema);
