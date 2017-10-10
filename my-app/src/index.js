import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloPage from './HelloPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HelloPage />, document.getElementById('root'));
registerServiceWorker();
