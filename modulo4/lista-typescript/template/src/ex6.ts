type clientes = {
    cliente: string, 
    saldoTotal: number, 
    debitos: number[]
}

const clientesBanco: clientes[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const subtraiDebitos = (array:clientes[]) => {
    const debitos = clientesBanco.map((cliente) => {
    const debitosSomados = cliente.debitos.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    cliente.saldoTotal -= debitosSomados
    cliente.debitos = []
    })

    const clienteNegativo = clientesBanco.filter((clientes) => {
        return clientes.saldoTotal < 0
    })

    return clienteNegativo
} 

console.log(subtraiDebitos(clientesBanco))