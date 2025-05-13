import { Router } from "express";
import AlunosController from "./controllers/AlunosController.js";
import TurmaController from "./controllers/TurmaController.js";
import userController from "./controllers/userController.js";
const router = Router();
router.get("/", (req, res) =>{
    res.status(200).send("Pagina HOME")
})
// TURMAS //
router.post("/turmas", TurmaController.Inserir)
router.get("/turmas", TurmaController.Listar)
router.put("/turmas/id", TurmaController.Editar)
router.delete("/turmas/id", TurmaController.Excluir)
// ALUNOS //
router.post("/Alunos", AlunosController.Inserir)
router.get("/Alunos", AlunosController.Listar)
router.put("/Alunos/Matricula", AlunosController.Editar)
router.delete("/Alunos/Matricula", AlunosController.Excluir)
//Login
router.post("/login", userController.Login)
export default router;