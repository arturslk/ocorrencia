import pool from './database/connection.js';

async function Listar() {
    let sql = "SELECT * FROM Turmas";
    const [Turmas] = await pool.query(sql);
    return Turmas;
}

async function Inserir(nome, ID_Turma) {
    let sql = "INSERT INTO Turmas(Nome, ID_Turma) VALUES (?, ?)";
    const [result] = await pool.query(sql, [nome, ID_Turma]);
    return result;
}

async function Editar(ID_Turma, Nome) {
    let sql = "UPDATE Turmas SET Nome = ? WHERE ID_Turma = ?";
    const [result] = await pool.query(sql, [Nome, ID_Turma]);
    return result;
}

async function Excluir(ID_Turma) {
    let sql = "DELETE FROM Turmas WHERE ID_Turma = ?";
    const [result] = await pool.query(sql, [ID_Turma]);
    return { mensagem: "Turma excluída" };
}

export default { Listar, Inserir, Editar, Excluir };
