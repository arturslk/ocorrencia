import RepositoryAlunos from "../repositories/RepositoryAlunos";
async function Listar(){
    const Alunos = await RepositoryAlunos.Listar();  
    return Alunos;    
}

async function Inserir(Nome, sobrenome, matricula){
    const Alunos = await RepositoryAlunos.Inserir(Nome, sobrenome, matricula);
    return Alunos;
}

async function Editar(Nome, sobrenome, matricula){
    const Alunos = await RepositoryAlunos.Editar(Nome, sobrenome, matricula);
    return Alunos;
}
async function Excluir(matricula){
    const Alunos = await RepositoryAlunos.Excluir(matricula);
    return Alunos;
}

export default {Listar, Inserir, Editar, Excluir}