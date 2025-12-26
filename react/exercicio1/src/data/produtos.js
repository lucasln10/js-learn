
const getProdutos = async () => {
    const response = await fetch('http://localhost:8080/produtos');
    const dados = await response.json();
    return dados;
}

export default getProdutos;