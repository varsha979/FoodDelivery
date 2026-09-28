import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://varshapandey2136_db_user:T7UqzcPAk3VeAH80@cluster0.r8xazhe.mongodb.net/FoodDelivery')");

    console.log("DB Connected");
};


 