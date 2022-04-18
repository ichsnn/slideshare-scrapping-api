import { Router } from "express";
import { SlidesController } from "../controllers";

const slides = Router();

slides.get('/slides', SlidesController.slidesImg)

export default slides;