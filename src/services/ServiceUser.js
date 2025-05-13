import repoUser from "../repositories/RepositoryUser.js";
import bcrypt from 'bcrypt'


async function Login(email, senha){
    let password = bcrypt.hash(senha, 10)

    const usuarios = await repoUser.Inserir(email, password );
    return usuarios;
}



export default {Login}