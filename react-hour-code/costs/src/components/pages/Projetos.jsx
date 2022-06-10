import { useLocation } from "react-router-dom";

import Message from "../layout/Message";

export default function Projetos(){
    const location = useLocation();
    let message = "";

    return(
        <div>
            <h1>Meus projetos</h1>
            <Message msg="Alguma mensagem" type="sucess" />
        </div>
    )
}