import express from "express";

import {
    listarAmostras,
    buscarAmostra,
    cadastrarAmostra,
    excluirAmostra,
    atualizarAmostra
} from "../controller/amostraController.js";


const router = express.Router();


router.get("/", listarAmostras);
router.get("/:indice", buscarAmostra);
router.post("/", cadastrarAmostra);
router.patch("/:indice", atualizarAmostra);
router.delete("/:indice", excluirAmostra);

export default router;