import React, {useState} from "react";
import PropTypes from "prop-types";
import { Contacto } from "../../models/contacto";

// const updateOnline=(props)=>{
//     props.Contacto.online=false
// }

const ComponenteB = (Contacto_obj) => {
    const [online, setOnline] = useState(Contacto_obj);
  const changeOnline=()=>{
    setOnline(!online)
  };


  return (
    <div>
      <h3>
        {online ? "Contacto en línea" : "Contacto no disponible"}
      </h3>

      <button onClick={changeOnline}>Cambiar estado</button>
    </div>
  );
};

ComponenteB.propTypes = {
  Contacto: PropTypes.bool,
};

export default ComponenteB;
