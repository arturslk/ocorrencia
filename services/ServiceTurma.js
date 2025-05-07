import repoTurma from "./repositories/RepositoryTurmas.js";
async function Listar(){
    const Turmas = await repoTurma.Listar();  
    return Turmas;    
}

async function Inserir(ID_Turma, nome){
    const Turmas = await repoTurma.Inserir(ID_Turma, nome);
    return Turmas;
}

async function Editar(ID_Turma, nome){
    const Turmas = await repoTurma.Editar(ID_Turma, nome);
    return Turmas;
}
async function Excluir(ID_Turma){
    const Turmas = await repoTurma.Excluir(ID_Turma);
    return Turmas;
}

export default {Listar, Inserir, Editar, Excluir}