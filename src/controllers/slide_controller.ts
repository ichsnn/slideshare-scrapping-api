import { NextFunction, Request, Response } from "express";
import pdfGenerator from "../utils/pdfGenerator";
import { filenameParser, htmlTemplate, slidesScrap } from "../utils";

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
            await pdfGenerator(html);
            const filePath = './files/slideshare.pdf';
            const filename = filenameParser(req.query.url) + ".pdf";
            res.download(filePath, filename)
        } catch (error) {
            next(error);
        }
    }
}

export default SlidesController;