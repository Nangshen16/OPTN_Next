"use client"

// import {Space} from "antd";
import React from 'react'
import ReactDOM from "react-dom";
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter, BrowserRouter as Router, RouterProvider} from "react-router-dom";
import 'antd/dist/antd.css';

ReactDOM.render(
    <BrowserRouter>
        <Router>

            <RouterProvider store={store}>
                 <App/>

            </RouterProvider>


        </Router>,

        document.getElementById('root')


    </BrowserRouter>

        
) 
{
    // return (
    //     <BrowserRouter>
    //     <Router>

    //         <Provider store={store}>
    //              <App/>

    //         </Provider>


    //     </Router>,

    //     document.getElementById('root')


    // </BrowserRouter>

    // )
}



export default index;