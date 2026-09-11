import express from "express"
import ControllerClientes from "../controller/clientes.js"
const router = express.Router()

router.post("/criar", ControllerClientes.Criar)

export default router