import express from "express";
import { Blog } from "../controllers";

const router = express.Router();

router.post("/blog", Blog);
