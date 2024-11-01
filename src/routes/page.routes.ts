import { Router, Request, Response } from "express";

const pageRouter = Router();

pageRouter.get("/", (req: Request, res: Response) => {
  res.status(200).render("index", { desc: "hello from home!" });
});

pageRouter.get("/about", (req: Request, res: Response) => {
  res.status(200).render("about", { desc: "hello from about!" });
});

pageRouter.get("/contact", (req: Request, res: Response) => {
  res.status(200).render("contact", { desc: "hello from contact!" });
});

export default pageRouter;
