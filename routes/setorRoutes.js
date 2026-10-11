import express from "express"

import {
    cadastrarSetor,
    listarSetores,
    buscarSetor,
    atualizarSetor,
    excluirSetor
} from "../controller/setorController.js"


const router = express.Router();


router.get("/", listarSetores);
router.get("/:indice", buscarSetor);
router.post("/", cadastrarSetor);
router.patch("/:indice", atualizarSetor);
router.delete("/:indice", excluirSetor);

export default router;