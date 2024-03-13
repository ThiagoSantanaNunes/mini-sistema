export async function getDadosCep(cep){
    const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const newData = await data.json()
    return newData
}

export async function handleCepClick(cep) {
    if (!validarCep(cep)){
        return false;
    }
        const cepData = await getDadosCep(cep);
        return cepData
}

export function validarCep(cep) {
    cep = cep.toString().replace(/\D/g, "");
    return /^[0-9]{8}$/.test(cep) && !/^(.)\1{7}$/.test(cep);
    
}