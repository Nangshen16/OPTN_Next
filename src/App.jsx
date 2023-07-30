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

const App = () => {
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
                        <Link href="components/exchanges">Exchanges</Link>
                        <Link href="components/cryptocurrencies">Cryptocurrencies</Link>
                        <Link href="components/qrcode">QrCode</Link>  
                        <Link href="/QRCODE/repos">QRCODE</Link>
           
                    </Space>
            </div>
            

        </div>

        
        
    </div>
  )
}

export default App