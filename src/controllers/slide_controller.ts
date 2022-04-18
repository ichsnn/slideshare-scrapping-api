import { NextFunction, Request, Response } from "express";
import cheerio from "cheerio";
import { Service } from "../helper";

// function to parse image src on html response
const getSlidesImg: any = (req: Request, res: Response, response: any) => {
    try {
        const $ = cheerio.load(response.data);
        const slideContainer = $('#slide-container');
        const slideImgColl: any[] = [] // doesn't contain noscript tag
        const lazyColl: any[] = []; // contain noscript tag

        // search slide contain img || srcset
        slideContainer.find('.slide').each((i, e) => {
            let src;
            if (src = $(e).find('img').attr('srcset')) {
                slideImgColl.push(src)
            } else {
                lazyColl.push($(e))
            }
        })

        // parse html on noscript tag and search img || srcset
        lazyColl.map((v: cheerio.Element, j) => {
            let doc = cheerio.parseHTML($(v).text());
            $(doc).each((i, e) => {
                let src;
                if (src = $(e).attr('srcset')) {
                    slideImgColl.push(src);
                }
            })
        })

        const imgColls: any[] = []; // for objects

        // Convert array to Object
        slideImgColl.map((v: string, i) => {
            const src = v.split(', ')
            const x = src.map((v) => {
                const results = v.split(' ');
                return {
                    resolution: results[1],
                    src: results[0],
                }

            })
            imgColls.push({ 'slide': i + 1, image: x })
        })

        // return array of object
        return imgColls;

    } catch (error) {
        throw error;
    }
}

// Controller
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