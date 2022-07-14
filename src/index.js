import React from 'react';
import ReactDOM from 'react-dom';
import './FunctionBased/App.css';
// component file
import TodoContainer from './FunctionBased/components/TodoContainer';

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,

  document.getElementById('root'),
);
