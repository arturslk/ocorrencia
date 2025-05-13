import serviceUser from "../services/ServiceUser.js";
async function Login(req, res){
    const usuarios = await serviceUser.Listar();
    res.status(200).json({usuarios});  
    if(usuarios.length == 0){
        return res.status(401).json({'mensagem': "Não existe esse email ou senha cadastrado"})
    }else{
        return usuarios
    }     
}

export default {Login}