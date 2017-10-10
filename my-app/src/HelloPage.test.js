import React from 'react';
import ReactDOM from 'react-dom';
import HelloPage from './HelloPage';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HelloPage />, div);  
});

