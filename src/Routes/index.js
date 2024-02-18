import express from "express";
import ReadWriteFile from "../Controller/index.js";
const router=express.Router();
router.get("/",ReadWriteFile)
export default router;