"use client"

import React from 'react'
// import { Link } from 'react-router-dom';
import Link from 'next/link'
// import Link from 'antd/es/typography/Link'
import {Layout, Space, Typography} from "antd";
import {Nav, Exchanges, Homepage, CryptoCurrencies, QrCode} from '../components/Nav';
import { Routes, Route, Link } from 'react-router-dom';
import './Styles.css';
import { Exchanges } from './components/export';
import Cryptocurrencies from './components/Cryptocurrencies';
import { useEffect, useState} from 'react';

export default function App(){
    const [data, setData] = useState();
    console.log(data);

    const baseUrl = 'https://coinranking1.p.rapidapi.com';
    console.log(baseUrl);


    useEffect(() => {
        const options ={
            method: 'GET',
            header: {
                'X-RapidAPI-Key': '3c75dad19emshbbaa068eccb5200p195ad8jsn546ff5a8c5da',
                'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
              
            }
        };
        fetch(baseUrl, options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
            })
            .catch(err =>{
                console.error(err);
            })
    })




  return (
    <div className='app'>
        <div className='navbar'>
            <Nav/>

        </div>
        <div className='main'>
            <Layout>
                <div className='routes'>
                    <Routes>
                        <Route path="/">
                            <Homepage/>
                        </Route>
                        <Route path="/cryptocurrencies">
                            <Cryptocurrencies/>
                        </Route>
                        <Route path="/exchanges">
                            <Exchanges/>
                        </Route>
                        <Route path="/qrcode">
                            <QrCode/>
                        </Route>
                    </Routes>

                </div>
            </Layout>

        
            <div className='footer' >
                <Typography.Title level={5} style={{color: 'white', textAlign: "center"}}>
                         Cash Token<br/>
                         All rights reserved

                </Typography.Title>
                    <Space>
                        <Link href="/">Home</Link>
                        <Link href="/exchanges">Exchanges</Link>
                        <Link href="/cryptocurrencies">Cryptocurrencies</Link>
                        <Link href="/qrcode">QrCode</Link>  
                        <Link href="/QRCODE/repos">QRCODE</Link>
           
                    </Space>
            </div>
            

        </div>

        
        
    </div>
  )
}

// export default App;