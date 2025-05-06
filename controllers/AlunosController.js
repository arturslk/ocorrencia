import serviceAlunos from "../services/serviceAlunos.js";
async function Listar(req, res){
    const Alunos = await serviceAlunos.Listar();
    res.status(200).json({Alunos});        
}

async function Inserir(req, res) {
    const {Nome, sobrenome, matricula} = req.body;     
    const Alunos = await serviceAlunos.Inserir(Nome, sobrenome, matricula) 
    res.status(201).json({"mensagem":"sucesso"}) 
}

async function Editar(req, res) {
    const {Nome, sobrenome, matricula} = req.body;     
    const Alunos = await serviceAlunos.Editar(Nome, sobrenome, matricula) 
    res.status(200).json(Alunos) 
}

async function Excluir(req, res) {
    const { matricula } = req.body;

    const resultado = await serviceAlunos.Excluir(matricula);
    const status = resultado.mensagem === "Aluno não encontrado" ? 404 : 200;

    res.status(status).json(resultado);
}

export default {Listar, Inserir, Editar, Excluir}