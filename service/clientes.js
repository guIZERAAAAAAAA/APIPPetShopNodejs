import RepositoryClientes from "../repository/clientes.js"

class ServiceClientes {

    async Criar (id, nome, telefone ) {
        if (!id || !nome || !telefone) {
            throw new Error("Favor informar todos os dados")
        }
        const clientes = await RepositoryClientes.Create(id, nome, telefone)
        return clientes
    }

}
export default new ServiceClientes ()