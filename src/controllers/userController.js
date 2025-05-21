import ServiceUser from "../services/ServiceUser.js";
async function Login(req, res){
    const {email, senha} = req.body;
    const user = await ServiceUser.Login(email, senha)
    console.log(user)
    if(user.length == 0)
        res.status(401).json({error: "Email ou senha inválido"})
    else
        res.status(200).json(user)


          
}

async function Inserir(req, res) {
    const {nome, sobrenome, email, senha, disciplina_id} = req.body;     
    const user = await ServiceUser.Inserir(nome, sobrenome, email, senha, disciplina_id) 
    res.status(201).json({"mensagem":"sucesso"}) 
}



export default {Login, Inserir}