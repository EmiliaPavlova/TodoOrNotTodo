import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootEl = document.getElementById('root');

function render() {
    ReactDOM.render(
        <App/>,
        rootEl
    );
}

render();
