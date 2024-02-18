import express from "express";
import router from "./src/Routes/index.js";
const app=express();
//using process.env.PORT to change to render host port automatically after rendering
const PORT=process.env.PORT||9000;
app.use("/",router)
app.listen(PORT,()=>console.log("server started in port"+PORT));