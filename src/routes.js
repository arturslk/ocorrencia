import { Router } from "express";
import AlunosController from "./controllers/AlunosController.js";
import TurmaController from "./controllers/TurmaController.js";
import userController from "./controllers/userController.js";
import autenticarToken from "./middlewares/authMiddleware.js";
const router = Router();
router.post("/", userController.Login)
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
router.post("/usuario", userController.Inserir)
router.post("/login", userController.Login)
//perfil
router.get("/profile", autenticarToken, userController.Profile);
export default router;
