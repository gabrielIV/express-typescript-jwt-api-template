import { Request, Response } from "express";

export let status = (req: Request, res: Response) => {
 res.json({ message: "ok", status: 200 });
};
