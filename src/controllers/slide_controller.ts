import { NextFunction, Request, Response } from "express";
import pdfGenerator from "../utils/pdfGenerator";
import { htmlTemplate, slidesScrap } from "../utils";

// Controller
const SlidesController = {
    slidesImg: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const imgCol = await slidesScrap.getImageCol(req, res);
            res.json({ status: true, results: imgCol });
        } catch (error) {
            next(error)
        }
    },
    slidesDownload: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const imgCol = await slidesScrap.getImageCol(req, res);
            const html = htmlTemplate(imgCol);
            const pdf = await pdfGenerator(html);
            const filePath = './files/slideshare.pdf';
            res.download('./files/slideshare.pdf')
        } catch (error) {
            next(error);
        }
    }
}

export default SlidesController;