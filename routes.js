import { Router } from "express";
import AlunosController from "./minha-api-node/controllers/AlunosController.js";
import TurmaController from "./minha-api-node/controllers/TurmaController.js";
const router = Router();
router.get("/", (req, res) =>{
    res.status(200).send("Pagina HOME")
})

router.post("/turmas", TurmaController.Inserir)
router.get("/turmas", TurmaController.Listar)
router.put("/turmas/:id", TurmaController.Editar)
router.delete("/turmas/:id", TurmaController.Excluir)
// ALUNOS
router.post("/Alunos", AlunosController.Inserir)
router.get("/Alunos", AlunosController.Listar)
router.put("/Alunos/:Matricula", AlunosController.Editar)
router.delete("/Alunos/:Matricula", AlunosController.Excluir)
export default router;