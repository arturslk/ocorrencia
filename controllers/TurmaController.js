import serviceTurmas from "../services/ServiceTurma.js";


async function Listar(req, res){
    const Turmas = await serviceTurmas.Listar();
    res.status(200).json({Turmas});        
}

async function Inserir(req, res) {
    const {Nome, ID_Turma} = req.body;     
    const Turma = await serviceTurmas.Inserir(Nome, ID_Turma) 
    res.status(201).json({"mensagem":"sucesso"}) 
}

async function Editar(req, res) {
    const {Nome, ID_Turma} = req.body;     
    const Turmas = await serviceTurmas.Editar(ID_Turma, Nome) 
    res.status(200).json(Turmas) 
}

async function Excluir(req, res) {
    const { ID_Turma } = req.body;

    const resultado = await serviceTurmas.Excluir(ID_Turma);
    const status = resultado.mensagem === "Turma não encontrada" ? 404 : 200;

    res.status(status).json(resultado);
}


export default {Listar, Inserir, Editar, Excluir}