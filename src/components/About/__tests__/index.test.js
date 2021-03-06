import React from 'react';
import {render,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

//This will ensure that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup);
//This will ensure that after each test, we won't have any leftover memory data that could give us false results.
describe('About component',()=>{
    // render About test
})

describe('About component',()=>{
    // First Test to verify compnent is rendering
    it ('renders',()=>{
     render(<About />)
    });
    
    //Second Test
    it('matches snapshot DOM node structure', ()=>{
        // render about
        const {asFragment}=render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})