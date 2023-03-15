import { NestMiddleware } from "@nestjs/common"
import { NextFunction, Request, Response } from "express";


export class MiddlewarePut implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log(req.body);
        next();
        if (req.method === 'Put'){
            const Url = req.url.substring(12);
            console.log(Url);
        }
    }

}