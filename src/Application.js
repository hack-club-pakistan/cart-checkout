import React from 'react';
import Cart from './components/cart/cart';

export default class Application extends React.Component {

  render() {
    return(
      <>
        <Cart
          productOne='30'
          productTwo='24'
          shipping='19.20'
        />
      </>
    );
  }
}
