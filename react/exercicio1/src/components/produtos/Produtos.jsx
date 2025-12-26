import { useEffect, useState } from 'react'
import React from 'react'
import getProdutos from '../../data/produtos'
import './Produtos.css'

export const Produtos = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        getProdutos().then(data => {
            setProdutos(data[0]);
        });
    }, []);

    return (
        <div className='content-produtos'>
            <h2 className='header-produtos'>Lista de Produtos</h2>
            <div className='linha'></div>
            <table className='tabela-produtos'>
                <thead className='coluns-table'>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => (
                        <tr key={produto.id}>
                            <td>{produto.name}</td>
                            <td>R$ {produto.preco}</td>
                            <td>{produto.quantidade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Produtos;