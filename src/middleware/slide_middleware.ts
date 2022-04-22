import { NextFunction, Request, Response } from "express";

export const slideMiddleware = (req: any, res: Response, next: NextFunction) => {
    let err: any = new Error();
    if (!req.query.url) {
        err.message = 'URL is empty';
        err.statusCode = 500;
        throw err;
    }
    if (!req.query.url.includes('https://www.slideshare.net/')) {
        err.message = 'URL not valid (Example : https://www.slideshare.net/*/*)';
        err.statusCode = 500;
        throw err;
    }
    next();
}