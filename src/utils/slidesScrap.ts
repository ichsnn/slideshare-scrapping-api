import { Request, Response } from "express";
import cheerio from "cheerio";
import { Service } from "../helper";

// Slidesharescraping
const slidesScrap = {
    getSlidesImg: (req: Request, res: Response, response: any) => {
        try {
            const $ = cheerio.load(response.data);
            const slideContainer = $('#slide-container');
            const slideImgColl: any[] = [] // doesn't contain noscript tag
            const lazyColl: any[] = []; // contain noscript tag

            // search slide contain img || srcset
            slideContainer.find('.slide').each((i, e) => {
                let srcset;
                if (srcset = $(e).find('img').attr('srcset')) {
                    slideImgColl.push(srcset)
                } else {
                    let doc = cheerio.parseHTML($(e).text());
                    $(doc).each((i, v) => {
                        if (srcset = $(v).attr('srcset')) {
                            slideImgColl.push(srcset)
                        }
                    })
                }
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
    },
    // function to get image collection
    getImageCol: async (req: Request, res: Response) => {
        try {
            const url: any = req.query.url;
            const response: any = await Service.fetchService(url);
            const imgCol = slidesScrap.getSlidesImg(req, res, response);
            return imgCol;
        } catch (error: any) {
            throw error;
        }
    }
}

// function to parse image src on html response

export default slidesScrap;