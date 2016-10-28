import React from 'react';
import Test from 'react/lib/ReactTestUtils';
import Boton from '../private/components/Boton.jsx';

describe('Dado que la aplicacion requiere todo lo necesario', () => {
  it('entonces se renderiza el boton por defecto', () => {
    const instance = Test.renderIntoDocument(<Boton/>);
    expect(instance.props.text).toEqual(undefined);
  });

  it('entonces se renderiza el boton y fue definido su texto', () => {
    const instance = Test.renderIntoDocument(<Boton text="CACA"/>);
    expect(instance.props.text).toEqual('CACA');
  });

  it('entonces se renderiza el boton y fue definido su imagen', () => {
    const instance = Test.renderIntoDocument(<Boton src="http://www.placehold.it/350x350"/>);
    expect(instance.props.src).toEqual('http://www.placehold.it/350x350');
  });
});
