import clientes from "../model/clientes.js"

class RepositoryClientes{

async Create (id, nome,telefone ) {
    const clientesCriados = await clientes.create({id, nome, telefone})
    return clientesCriados
}
















}
export default new RepositoryClientes ()



