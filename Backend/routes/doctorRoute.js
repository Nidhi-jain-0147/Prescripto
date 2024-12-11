import express from "express";
const doctorRouter = express.Router();
import { doctorList } from "../controllers/doctorController.js";

// all doctor api
doctorRouter.get("/list", doctorList);
export default doctorRouter;
