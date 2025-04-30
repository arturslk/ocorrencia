import { Router } from "express";
import controllerAluno from "../minha-api-node/controllers/TurmaController.js";
const router = Router();
router.get("/", (req, res) =>{
    res.status(200).send("Pagina HOME")
})

router.post("/turmas", controllerAluno.Inserir)
router.get("/turmas", controllerAluno.Listar)
router.put("/turmas/:id", controllerAluno.Editar)
router.delete("/turmas/:id", controllerAluno.Excluir)
export default router;