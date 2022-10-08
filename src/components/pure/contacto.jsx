import React from 'react';
import PropTypes from 'prop-types';
import { Contacto} from '../../models/contacto';
import ComponenteB from './componenteB';


const Contacto_componente = ({Contacto}) => {
    return (
        <div>
            <h3> Nombre: {Contacto.name}</h3>
            <h3> Apellido: {Contacto.lastname}</h3>
            <h3> Email: {Contacto.email}</h3>
            {/* <h3> Contacto: {Contacto.online?"Sí":"No"}</h3> */}
            <ComponenteB Contacto={Contacto.online}></ComponenteB>
        </div>
    );
};


Contacto_componente.propTypes = {
    Contacto:PropTypes.instanceOf(Contacto),
};


export default Contacto_componente;
