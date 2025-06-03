import bcrypt from 'bcrypt';
import repoUsuario from "../repositories/RepositoryUser.js";
import jwt from 'jsonwebtoken';

const SECRET = "segredo-super-seguro";

async function Login(email, senha) {
  const user = await repoUsuario.ListarByEmail(email);
  
  if (user.length === 0) {
    return [];
  }

  const isSenhaCorreta = await bcrypt.compare(senha, user.senha);

  if (!isSenhaCorreta) {
    return [];
  }

  delete user.senha;

  // ⬇️ Gera o token JWT com ID e email
  const token = jwt.sign(
    { id: user.id, email: user.email },
    SECRET,
    { expiresIn: "1h" }
  );

  user.token = token;
  return user;
}


async function Inserir(nome, sobrenome, email, senha, disciplina_id){
    const password = await bcrypt.hash(senha, 10)  
    const user = await repoUsuario.Inserir(nome, sobrenome, email, password, disciplina_id);
    return user;
}



export default {Login, Inserir}











