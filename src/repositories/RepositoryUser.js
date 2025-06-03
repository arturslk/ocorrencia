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

async function ListarById(id) {
  let sql = "SELECT id, nome, sobrenome, email, disciplina_id FROM usuarios WHERE id = ?";
  const [user] = await pool.query(sql, [id]);
  return user.length === 0 ? null : user[0];
}

export default {ListarByEmail, ListarById, Inserir}