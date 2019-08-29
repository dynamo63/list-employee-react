import React from 'react';
import AddEmployee from './AddEmployee';
import renderer from 'react-test-renderer';

//Test HTML AddEmployee Component, save in __snapshot__/

it('renders correctly', function(){
    const test = renderer.create(<AddEmployee/>).toJSON();
    expect(test).toMatchSnapshot();
});