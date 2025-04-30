import con from "../database/conection.js";
async function Listar(){
    let sql = "SELECT * FROM Turmas";
    const [Turmas] = await (con.connection).execute(sql);
    return Turmas;
}

async function Inserir(nome, sobrenome){
    let sql = "INSERT INTO TURMA(NOME, ID) VALUES (?,?)";
    const [Turmas] = await (con.connection).query(sql, [nome, id]);
    return Turmas;
}
async function Editar(id, nome){
    let sql = "UPDATE ALUNO SET NOME=?, SOBRENOME=? WHERE MATRICULA=?";
    const [Turmas] = await (con.connection).query(sql, [nome, id]);
    return {id};
}

async function Excluir(id){
    let sql = "DELETE FROM  TURMAS WHERE MATRICULA=?";
    const [Turmas] = await (con.connection).query(sql, [id]);
    return {mensagem:"Turma excluída"};
}


export default {Listar, Inserir, Editar, Excluir}
