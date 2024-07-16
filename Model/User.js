import mongoose from "mongoose";

const User = mongoose.Schema(
  {
    email: String,
    token:String,
    password:String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", User);