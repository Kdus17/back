import mongoose from "mongoose";

export const connect_db = () => {
  return mongoose.connect("url");
};
