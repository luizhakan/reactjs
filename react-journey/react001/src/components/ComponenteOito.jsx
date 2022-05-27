import React from 'react'

const ComponenteOito = (props) =>{

    function condicao(){
        if(props.valor === 10){
            return <p>O valor é igual a 10</p>
        } else if(props.valor > 10) {
            return <p>O valor é superior a 10</p>
        } else {
            return <p>O valor é inferior a 10</p>
        }
    }
// posso também usar o switch ou qualquer coisa que eu quiser
    return(
        <div className="componente">
            <p className="titulo">
                Título : {props.titulo}
            </p>
            {condicao()}
        </div>
    )
}

export default ComponenteOito;