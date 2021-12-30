import React from "react";
import { shallow } from 'enzyme';
import { AddCategory } from "../../components/AddCategory";


describe('Pruebas en <AddCategory.js />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories }/>);

    beforeEach( () => {

        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories }/>);

    })

    test('Debe de mostrarse correctamente ', () => {
        
        expect( wrapper ).toMatchSnapshot();

    })

    // test('Debe de cambiar la caja de texto', () => {
        
    //     const input = wrapper.find('input');
    //     const value = 'Test';
        
    //     input.simulate('change', { target: { value } });

    //     expect( wrapper.find('p').text().trim() ).toBe( value );

    // })
    
    test('NO debe de postear la informacion con submit', () => {
        
        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });

        expect( setCategories ).not.toHaveBeenCalled();

    })

    test('Debe llamar al setCategories y limpiar la caja de texto', () => {
        
        const value = 'Texto de Prueba';

        //1. simular el inputChange
        wrapper.find('input').simulate('change', { target: { value } } );

        //2. simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} } );

        //3. el setCategories se debe haber llamado
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

        //4. el value del input debe estar como un string vacio
        expect( wrapper.find('input').prop('value') ).toBe('');

    })
    
    


})