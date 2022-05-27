import React from "react";

{/* export default props => 
  <div className="componente">
     <p>Título : {props.title}</p>
   </div>
*/}
const ComponenteTres = (props) => {

  function teste(){
    console.log("luiz hakan")
  };
  teste();

  return(
    <div className="componente">
      <p>Título : {props.title}</p>
      <p>Subtitulo : {props.subtitle}</p>
    </div>
  )
}

export default ComponenteTres;