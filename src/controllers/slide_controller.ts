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
            const pdf = await pdfGenerator(html);
            const filename = filenameParser(req.query.url) + ".pdf";
            res.setHeader('Access-Control-Expose-Headers','Content-Disposition');
            res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
            res.setHeader('Content-Type', 'application/pdf')
            res.send(pdf);
        } catch (error) {
            next(error);
        }
    }
}

export default SlidesController;