import React from 'react'
import './ComponenteSeis.css'
import { dados_clientes } from '../dados_clientes/dados_clientes.js'

const ComponenteSeis = (props) => {
    const cliente = ()=>{
        return dados_clientes.map((item) => {
            return(
                <li key={item.id_cliente}>id: {item.id_cliente} | nome : {item.nome} | email : {item.email}</li>
            )
        })
    }

    return (
        <div className="componente">
        <p className="titulo">
            Titulo: {props.titulo}
        </p>
        <ul>
            {cliente()}
        </ul>
    </div>)
}

export default ComponenteSeis;