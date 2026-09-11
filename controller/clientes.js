import ServiceClientes from "../service/clientes.js"

class ControllerClientes {

async Criar (req,res) {
    try {
        const {id ,nome ,telefone } = req.body

        await ServiceClientes.Criar(id,nome,telefone)

        res.status(201).send({message: "Cadastro com sucesso "})
    } catch (error) {
        res.status(500).send({
            message: error.message
})}}

}
export default new ControllerClientes ()