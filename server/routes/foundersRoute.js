import express from "express";
import {
  addFounder,
  getFOunderInfo,
  send_report,
} from "../controllers/foundersController.js";

const foundersRoute = express.Router();

foundersRoute.get("/", getFOunderInfo);
foundersRoute.post("/founder_create", addFounder);
foundersRoute.post("/send_report", send_report);

export default foundersRoute;
