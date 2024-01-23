import express from "express";
import { subscribe } from "../controllers/stayInformedController";

const stayInformedRoute = express.Router();

stayInformedRoute.post("/add", subscribe);
