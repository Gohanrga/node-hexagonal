import express from "express";
import { Request, Response } from "express";

import PokemonController from "../controller/http/PokemonController";

const app = express();

app.get("/", (req: Request, resp: Response) => {
  resp.send("Application works");
});

app.use("/api/v1/pokemon", PokemonController);

app.listen(4000, () => {
  console.log("Application started on port 4000");
});
