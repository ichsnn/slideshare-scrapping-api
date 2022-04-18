import { NextFunction, Request, Response } from "express";

const slideMiddleware = (req : Request, res : Response, next : NextFunction) => {
    if(!req.query.url) throw new Error('')
    next();
}