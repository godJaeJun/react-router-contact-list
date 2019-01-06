import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'; //라우터 생성을 위해...
import App from './App';

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
    ,document.getElementById('root'));
