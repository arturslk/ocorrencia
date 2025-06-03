import jwt from "jsonwebtoken";

const SECRET = "segredo-super-seguro"; // deve ser o MESMO do service

function autenticarToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ erro: "Token não fornecido" });
  }

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ erro: "Token inválido" });
    }

    req.usuario = decoded;
    next();
  });
}

export default autenticarToken;
