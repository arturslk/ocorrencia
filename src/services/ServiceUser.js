import bcrypt from 'bcrypt';
import repoUsuario from "../repositories/RepositoryUser.js";
async function Login(email, senha){   

    const user =  await repoUsuario.ListarByEmail(email);  
    if(user.length == 0){
         return []
    }else{
        if(await bcrypt.compare(senha, user.senha)){

            delete user.senha
            user.token = "abcd1234"
            return user;
        }else{

            return []
        }
    }
        
               
}

async function Inserir(nome, sobrenome, email, senha, disciplina_id){
    const password = await bcrypt.hash(senha, 10)  
    const user = await repoUsuario.Inserir(nome, sobrenome, email, password, disciplina_id);
    return user;
}



export default {Login, Inserir}