import { getDadosCep, handleCepClick } from "./dados.js";
document.getElementById('button').addEventListener('click', () => {
    const cep = document.getElementById('address').value;
    handleCepClick(cep);
});

document.getElementById('address').addEventListener('change', async () => {
    const cep = document.getElementById('address').value;
    const dados = await handleCepClick(cep);
    if (!dados) {
        return
    }
    document.getElementById(`street`).value = dados.logradouro
    document.getElementById(`city`).value = dados.localidade
    document.getElementById(`uf`).value = dados.uf
    document.getElementById(`neighborhood`).value = dados.bairro
    document.getElementById(`complement`).value = dados.complemento
    handleCepClick(cep);
});



document.addEventListener('DOMContentLoaded', function () {


    document.getElementById('registrationForm').addEventListener('click', function (event) {
        event.preventDefault()
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const address = document.getElementById('address').value;
        const street = document.getElementById(`street`).value;
        const city = document.getElementById(`city`).value;
        const uf = document.getElementById(`uf`).value;
        const neighborhood = document.getElementById(`neighborhood`).value;
        const number = document.getElementById(`street-number`).value;
        const complement = document.getElementById(`complement`).value;
        const profession = document.getElementById('profession').value;
        const id = document.getElementById('id').value;
        if (event.target.name === 'cadastrar') {
            fetch(`http://127.0.0.1:5000/criar/${name}/${surname}/${address}/${street}/${city}/${uf}/${neighborhood}/${number}/${complement}/${profession}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

        }

    });
    document.getElementById('alterarForm').addEventListener('click', async function (event) {
        event.preventDefault()
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const address = document.getElementById('address').value;
        const street = document.getElementById(`street`).value;
        const city = document.getElementById(`city`).value;
        const uf = document.getElementById(`uf`).value;
        const neighborhood = document.getElementById(`neighborhood`).value;
        const number = document.getElementById(`street-number`).value;
        const complement = document.getElementById(`complement`).value;
        const profession = document.getElementById('profession').value;
        const id = document.getElementById('id').value;
        if (event.target.name === 'deletar') {
            fetch(`http://127.0.0.1:5000/deletar/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        } else if (event.target.name === 'atualizar') {
            if (complement === "") {
                fetch(`http://127.0.0.1:5000/atualizar/${id}/${name}/${surname}/${address}/${street}/${city}/${uf}/${neighborhood}/${number}/%20/${profession}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                return
            }
            fetch(`http://127.0.0.1:5000/atualizar/${id}/${name}/${surname}/${address}/${street}/${city}/${uf}/${neighborhood}/${number}/${complement}/${profession}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        } else if (event.target.name === 'Buscar') {
            const data = await fetch(`http://127.0.0.1:5000/detalhes/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const jsonData = await data.json()
            document.getElementById('name').value = jsonData.detalhes[1]
            document.getElementById('surname').value = jsonData.detalhes[2]
            document.getElementById('address').value = jsonData.detalhes[3]
            document.getElementById(`street`).value = jsonData.detalhes[4]
            document.getElementById(`city`).value = jsonData.detalhes[5]
            document.getElementById(`uf`).value = jsonData.detalhes[6]
            document.getElementById(`neighborhood`).value = jsonData.detalhes[7]
            document.getElementById(`street-number`).value = jsonData.detalhes[8]
            document.getElementById(`complement`).value = jsonData.detalhes[9]
            document.getElementById('profession').value = jsonData.detalhes[10]
            // Código para buscar
        }
    })
});

