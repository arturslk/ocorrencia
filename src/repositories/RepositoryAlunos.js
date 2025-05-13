import pool from "../database/connection.js";

async function Listar(){
    let sql = "SELECT * FROM Alunos";
    const [Alunos] = await pool.execute(sql);
    return Alunos;
}

async function Inserir(Nome, sobrenome, matricula, turma){
    let sql = "INSERT INTO Alunos(nome, sobrenome, matricula) VALUES (?,?,?)";
    const [Alunos] = await pool.query(sql, [Nome,sobrenome, matricula]);
    return Alunos;
}
async function Editar(Nome, sobrenome, matricula){
    let sql = "UPDATE Alunos SET NOME=?, SOBRENOME=? WHERE MATRICULA=?";
    const [result] = await pool.query(sql, [Nome, sobrenome, matricula]);
    return result;
}

async function Excluir(matricula){
    let sql = "DELETE FROM  Alunos WHERE MATRICULA=?";
    const [result] = await pool.query(sql, [matricula]);
    return {mensagem:"Aluno excluído"};
}


export default {Listar, Inserir, Editar, Excluir}
