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

        const imgColls: any[] = [];

        slideImgColl.map((v : string, i) => {
            const src = v.split(', ')
            const x = src.map((v) => {
                const results = v.split(' ');
                return {
                    resolution: results[1],
                    src: results[0],
                }

            })
            imgColls.push({'slide' : i + 1, image : x})
        })

        console.log(imgColls)

        return imgColls;
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
            res.json(imgCol);
        } catch (error) {
            next(error)
        }
    }
}

export default SlidesController;