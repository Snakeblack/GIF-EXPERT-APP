import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('Buscar GIF');

    const handleInputChange = ( e ) => {
        // console.log(e.target.value);
        setInputValue( e.target.value );
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        // console.log( 'Submit hecho' );
        setCategories( cats => [...cats, inputValue] );
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.string
}
