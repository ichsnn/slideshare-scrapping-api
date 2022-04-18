import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export const error = (err : any, req: Request, res: Response, next: NextFunction) => {
    res.status(500)
    res.send({status: false, message: err.message})
}