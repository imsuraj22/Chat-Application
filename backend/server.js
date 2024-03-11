import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import connectToMongoDB from "./db/connectToMongoDb.js";
const app=express();
const PORT=process.env.PORT || 8000


dotenv.config()
app.use(express.json()) //to parse incoming request with JSON
app.use("/api/auth",authRoutes)


// app.get("/",(req,res)=>{
//     res.send("hello Suraj");
// })


app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`server running on port ${PORT}`)
})