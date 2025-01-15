import express from "express";
const doctorRouter = express.Router();
import { doctorList, doctorLogin } from "../controllers/doctorController.js";

// all doctor api
doctorRouter.get("/list", doctorList);
doctorRouter.post("/login", doctorLogin);
export default doctorRouter;
