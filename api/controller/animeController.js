import { Router } from "express";
import { inserirAnime } from "../repository/animeRepository";
const server = Router()

server.post("/Anime", async (req, resp) => {
     const a = req.body;
     const resposta = await inserirAnime(a)
})
export default server;