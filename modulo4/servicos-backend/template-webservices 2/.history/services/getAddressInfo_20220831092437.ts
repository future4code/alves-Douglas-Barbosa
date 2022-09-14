import axios from "axios"

const baseURL = "https://viacep.com.br/ws"

const getAddressInfo = async (cep: string): Promise<string> => {
    try {
        const res = await axios.get(`${baseURL}/${cep}/json`);
        
        console.log(res)
        
        const address = ``

        return address
    } catch (error) {
        throw new Error();
    }
}

export default getAddressInfo