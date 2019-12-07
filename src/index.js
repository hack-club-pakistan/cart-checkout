import React, { Component } from 'react';
import { render } from 'react-dom';
import Application from './Application';

const App = () => {
  return (
    <>
      <Application />
    </>
  )
}

render(<App />, document.getElementById('root'));
