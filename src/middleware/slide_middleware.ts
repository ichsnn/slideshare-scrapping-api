import { NextFunction, Request, Response } from "express";

export const slideMiddleware = (req : any, res : Response, next : NextFunction) => {
    if(!req.query.url) throw new Error('URL is empty')
    if(!req.query.url.includes('https://www.slideshare.net/')) throw new Error('URL not valid (Example : https://www.slideshare.net/*/*)')
    next();
}