import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose
    .connect(
      'mongodb+srv://fooddel:0099887766@cluster0.mfso2.mongodb.net/food-del'
    )
    .then(() => console.log('DB Connected'));
};
