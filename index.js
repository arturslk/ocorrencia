import express from "express";
import cors from "cors";
import routes from "./routes.js";
import vercelNode from '@vercel/node';
const { createServer } = vercelNode;


const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

// Exporta o app como uma função handler para Vercel
export default app;