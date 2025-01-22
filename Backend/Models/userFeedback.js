import mongoose from "mongoose";

const userFeedbackschema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      trim: true,
    },
    Photo: {
      data: Buffer,
      contentType: String,
    },
    Discription: {
      type: String,
      required: true,
    },
    VideoLink: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("userFeedback", userFeedbackschema);
