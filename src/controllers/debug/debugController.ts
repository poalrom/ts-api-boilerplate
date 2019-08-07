import { Request, Response } from "express";
import { logger } from "../../logger";

export function debugController(req: Request, res: Response) {
    logger.info("Headers", req.headers);
    logger.info("Body", req.body);
    res.json({});
}