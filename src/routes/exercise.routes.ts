import express, { Router, Request, Response } from "express";

const app = express();

const exerciseRouter = Router();

exerciseRouter.get("/", (req: Request, res: Response) => {
  res.status(200).render("index");
});

exerciseRouter.get("/about", (req: Request, res: Response) => {
  res.status(200).render("about");
});

exerciseRouter.get("/contact", (req: Request, res: Response) => {
  res.status(200).render("contact");
});

export default exerciseRouter;
