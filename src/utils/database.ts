import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    console.log('DB接続するど');
    console.log(process.env.DB_URI);
    await mongoose.connect(process.env.DB_URI || '')
  } catch (error) {
    console.log('DB接続に失敗しました');
    console.log(error);
    throw new Error();
  }
}