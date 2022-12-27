import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    username: {
      type: String,
      unique: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    password: {
      type: String,
      select: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    otp: {
      type: Number,
      default: Math.floor(Math.random() * 1000000),
    },
  },
  { timestamps: true }
);

const userModel = model("user", userSchema);
export default userModel;
