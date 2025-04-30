import repoAluno from "../repositories/RepositoryTurmas.js";
async function Listar(){
    const Turmas = await repoAluno.Listar();  
    return Turmas;    
}

async function Inserir(nome, sobrenome){
    const Turma = await repoTurma.Inserir(nome, id);
    return Turma;
}

async function Editar(id, nome, sobrenome){
    const Turma = await repoTurma.Editar(id, nome);
    return Turma;
}
async function Excluir(id){
    const Turma = await repoTurma.Excluir(id);
    return Turma;
}

export default {Listar, Inserir, Editar, Excluir}