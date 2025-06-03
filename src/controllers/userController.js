import ServiceUser from "../services/ServiceUser.js";

// Login do usuário
async function Login(req, res) {
  const { email, senha } = req.body;
  const user = await ServiceUser.Login(email, senha);

  if (user.length === 0) {
    return res.status(401).json({ error: "Email ou senha inválido" });
  }

  res.status(200).json(user);
}

// Inserção de novo usuário
async function Inserir(req, res) {
  const { nome, sobrenome, email, senha, disciplina_id } = req.body;
  await ServiceUser.Inserir(nome, sobrenome, email, senha, disciplina_id);
  res.status(201).json({ mensagem: "Usuário cadastrado com sucesso" });
}

// Rota protegida: retorna os dados do usuário logado
import repoUsuario from "../repositories/RepositoryUser.js";

async function Profile(req, res) {
  try {
    const id = req.usuario.id;
    const usuarioCompleto = await repoUsuario.ListarById(id);

    if (!usuarioCompleto) {
      return res.status(404).json({ erro: "Usuário não encontrado" });
    }

    res.status(200).json({
      mensagem: "Perfil carregado com sucesso",
      user: usuarioCompleto,
    });
  } catch (err) {
    res.status(500).json({ erro: "Erro ao carregar perfil" });
  }
}

export default { Login, Inserir, Profile };
