import { useState, useEffect, useCallback } from "react";

export default function Lista({resultados}){
    const [listaItem, setListaItem] = useState(() => {return []});
    
    useEffect(() => {
        setListaItem(resultados())
        console.log('render');
    }, [resultados]);

    return(listaItem.map(item => <p key={item}>{item}</p>));
}