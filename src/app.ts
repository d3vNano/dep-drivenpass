import express, { Request, Response } from "express";

const app = express();

app.get("/health", (req: Request, res: Response) => {
    const OK: string = "Wee!";

    res.status(200).send(OK);
});

app.listen(4000, () => {
    console.log("wee!!");
});
