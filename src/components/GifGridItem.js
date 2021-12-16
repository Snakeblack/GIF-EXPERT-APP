import React from 'react'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

export const GifGridItem = ({ id, title, url }) => {

    //console.log( id, title, url );

    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={ url } alt={ title } />
            <p> { title } </p>
        </div>
    )
}

/*
    1. Enzyme
    2. Enzyme to Json
    3. Deben de mostrar el componente correctamente
        * shallow
        * wrapper
        * wrapper .toMatchSnapshot()

*/