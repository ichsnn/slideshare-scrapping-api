import { NextFunction, Request, Response } from "express";
import cheerio from "cheerio";
import { Service } from "../helper";

const getSlidesImg: any = (req: Request, res: Response, response: any) => {
    try {
        const $ = cheerio.load(response.data);
        const slideContainer = $('#slide-container');
        const slideImgColl: any[] = []
        const lazyColl: any[] = [];

        slideContainer.find('.slide').each((i, e) => {
            let src;
            if (src = $(e).find('img').attr('srcset')) {
                slideImgColl.push(src)
            } else {
                lazyColl.push($(e))
            }
        })

        lazyColl.map((v: cheerio.Element, j) => {
            let doc = cheerio.parseHTML($(v).text());
            $(doc).each((i, e) => {
                let src;
                if (src = $(e).attr('srcset')) {
                    slideImgColl.push(src);
                }
            })
        })
        return slideImgColl;
    } catch (error) {
        throw error;
    }
}

const SlidesController = {
    slidesImg: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const url: any = req.query.url;
            const response: any = await Service.fetchService(url);
            const imgCol = getSlidesImg(req, res, response);
            res.send(imgCol);
        } catch (error) {
            next(error)
        }
    }
}

export default SlidesController;