import serviceTurmas from "../services/serviceTurmas.js";
async function Listar(req, res){
    const Turmas = await serviceTurmas.Listar();
    res.status(200).json({Turmas});        
}

async function Inserir(req, res) {
    const {nome, id} = req.body;     
    const Turma = await serviceTurmas.Inserir(nome, id) 
    res.status(201).json({"mensagem":"sucesso"}) 
}

async function Editar(req, res) {
    const id = req.params.id;
    const {nome, cod} = req.body;     
    const Turma = await serviceTurmas.Editar(id, nome) 
    res.status(200).json(Turma) 
}

async function Excluir(req, res) {
    const id = req.params.id;
        
    const Turma = await serviceTurmas.Excluir(id) 
    res.status(200).json(aluno) 
}

export default {Listar, Inserir, Editar, Excluir}