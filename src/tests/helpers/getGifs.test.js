import React from "react";
import { shallow } from 'enzyme';
import { getGifs } from "../../helpers/getGifs";


describe('Pruebas en getGifs.js Fetch', () => {

    test('Debe de traer 50 elementos', async() => {
        
        const gifs = await getGifs('One Punch');

        expect( gifs.length ).toBe( 50 );

    });


    test('Debe de traer 0 elementos', async() => {
        
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );

    })
        
        
})