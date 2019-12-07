import React from 'react';

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div>
          <h3>Product One</h3>
          <p>Price: {this.props.productOne}</p>
          <h3>Product Two</h3>
          <p>Price: {this.props.productTwo}</p>
          <hr />
          <h3>shipping Total: {this.props.shipping} </h3>
          <hr />
          <h3>Cart Total: {parseFloat(this.props.productOne) + parseFloat(this.props.productTwo) + parseFloat(this.props.shipping)}</h3>
        </div>
      </>
    );
  }
}
