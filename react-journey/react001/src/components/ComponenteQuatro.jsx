import React from "react";
import ComponenteCinco from "./ComponenteCinco";

const ComponenteQuatro = (props) => (
  <div className="componente">
    <p>Subtitle 4 : {props.title}</p>
    <ComponenteCinco />
    <ComponenteCinco />
  </div>
);

export default ComponenteQuatro;
