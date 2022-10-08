import React from 'react';
import PropTypes from 'prop-types';
import Contacto_componente from '../pure/contacto';
import { Contacto } from '../../models/contacto';


const ListaContacto = () => {
    const contacto_obj = new Contacto("Jeffield","Fullbuster","Jeffield@gmail.com",true)
    return (
        <div>
            <Contacto_componente Contacto={contacto_obj}></Contacto_componente>
        </div>
    );
};


ListaContacto.propTypes = {

};


export default ListaContacto;
