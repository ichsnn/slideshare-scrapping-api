import { Router } from "express";
import { SlidesController } from "../controllers";

const slides = Router();

slides.get('/api/slides/img', SlidesController.slidesImg)

export default slides;