import { Router } from "express";
import { SlidesController } from "../controllers";
import { slideMiddleware } from "../middleware";

const slides = Router();

slides.get('/api/slides/img', slideMiddleware, SlidesController.slidesImg)
slides.get('/api/slides/download', slideMiddleware, SlidesController.slidesDownload);

export default slides;