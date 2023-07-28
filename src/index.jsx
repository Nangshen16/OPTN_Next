import {Space} from "antd";
import React from 'react'
import ReactDOM from "react-dom";
import Link from "antd/es/typography/Link";
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';
import { Router } from "next/router";
import { BrowserRouter as Router } from "react-router-dom";
import 'antd/dist/antd.css';

ReactDOM.render(
    <Router>
        <Provider store={store}>
             <App/>

        </Provider>
        
        
    </Router>,
    document.getElementById('root')
)


export default index