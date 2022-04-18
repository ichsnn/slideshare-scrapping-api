import { Router } from "express";
import { SlidesController } from "../controllers";
import { slideMiddleware } from "../middleware";

const slides = Router();

slides.get('/api/slides/img', slideMiddleware, SlidesController.slidesImg)

export default slides;