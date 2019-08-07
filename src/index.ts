require("dotenv").config();

import express from "express";

import { appRouter } from "./controllers";
import { logger } from "./logger";

const port = process.env.TS_API_PORT;

export const app = express()
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use("/", appRouter)
    .listen(port, () => {
        console.log(`Example app listening on port ${port}!`);
        console.log(`http://localhost:${port}`);
    });

process.on("uncaughtException", e => {
    logger.error(e);
    process.exit(1);
});
process.on("unhandledRejection", e => {
    logger.error(e);
    process.exit(1);
});