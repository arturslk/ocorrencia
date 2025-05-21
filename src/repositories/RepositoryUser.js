import pool from "../database/connection.js";
async function ListarByEmail(email){
    let sql = "SELECT * FROM usuarios WHERE EMAIL = ?";
    const [user] = await pool.query(sql, [email]);
    if(user.length == 0)
        return []
    else
        return user[0]
}

async function Inserir(nome, sobrenome, email, senha, disciplina_id){
    let sql = "INSERT INTO usuarios(nome, sobrenome, email, senha, disciplina_id) VALUES (?,?,?,?,?)";
    const [user] = await pool.query(sql, [nome, sobrenome, email, senha, disciplina_id]);
    return user;
}

export default {ListarByEmail, Inserir}