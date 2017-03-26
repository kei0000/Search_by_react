import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import data from './data/data';

ReactDOM.render(
  // specify react component and argument
  <App data={data} />,
  // specify where react component to render 
  document.getElementById('root')
);
