import mongoose from "mongoose";

export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;
        
        // we can listen many events after building connection
        connection.on("connected" , () => {
            console.log("Database is connected successfully!")
        })

        connection.on("error", (err) => {
            console.log("DB connection error : " + err)
            process.exit()
        })

    } catch (error) {
        console.log("Somthing went wrong! : " + error)
        
    }
}