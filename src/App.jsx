import React from 'react'
import Link from 'antd/es/typography/Link'
import {Layout, Space, Typography} from "antd";
import {Nav, Exchanges, Homepage, CryptoCurrencies, QrCode} from '../components/Nav';
import { Link } from 'react-router-dom';
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
                        <Route expact path="/">
                            <Homepage/>
                        </Route>
                        <Route expact path="/cryptocurrencies">
                            <Cryptocurrencies/>
                        </Route>
                        <Route expact path="/exchanges">
                            <Exchanges/>
                        </Route>
                        <Route expact path="/qrcode">
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
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                        <Link to="/qrcode">QrCode</Link>  
                        <Link href="/QRCODE/repos">QRCODE</Link>
           
                    </Space>
            </div>
            

        </div>

        
        
    </div>
  )
}

export default App