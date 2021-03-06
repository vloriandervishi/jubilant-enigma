import React from 'react';
import {render,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component',()=>{
    // baseline test
   it ('renders',()=>{
       render(<Nav />);
   });
    // snapshot test
    it('matches snapshot',()=>{
     const {asFragment}=render(<Nav />);
     // assert value comparison'
     expect(asFragment()).toMatchSnapshot();
    });
})

describe('emoji is visible',()=>{
 it('insert emoji into the h2',()=>{
     // arrange
     const {getByLabelText}=render(<Nav />);

     // assert
     expect(getByLabelText('camera')).toHaveTextContent('📸');
 });
})

// Test link visibility
describe('links are visible', ()=>{
    it('inserts text into the links',()=>{
        // Arrange
        const {getByTestId}=render(<Nav />);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
        //Assert
    });
})