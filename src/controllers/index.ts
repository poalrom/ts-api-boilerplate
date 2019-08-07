import express, { Router } from "express";
import { debugController } from "./debug/debugController";

export const appRouter = Router()
    .get("/debug", debugController);