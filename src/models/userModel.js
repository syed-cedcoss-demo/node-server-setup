import { model, Schema } from 'mongoose';

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true
    },
    name: {
      type: String
    },
    password: {
      type: String,
      select: false
    },
    is_active: {
      type: Boolean,
      default: false
    },
    otp: {
      type: Number,
      default: Math.floor(Math.random() * 10000)
    }
  },
  { timestamps: true }
);

const userModel = model('user', userSchema);
export default userModel;
