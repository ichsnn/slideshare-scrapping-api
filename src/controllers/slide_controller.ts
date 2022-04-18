import { NextFunction, Request, Response } from "express";
import { Service } from "../helper";

const SlidesController = {
    slidesImg: async (req : Request, res : Response, next : NextFunction) => {
        try {
            const url : any = req.query.url;
            const response : any = await Service.fetchService(url);
            res.send('OK!');
        } catch (error) {
            next(error)
        }
    }
}

export default SlidesController;