"use client"

import React, {useEffect, useState} from 'react'
import Link from "next/link";
// import Link from 'antd/es/typography/Link';
import Image from "next/image";
// import {Cryptocurrencies} from '../components/Cryptocurrencies';
import {HomeOutlined,FundOutlined,MoneyCollectOutlined, QrcodeOutlined } from '@ant-design/icons';
import {Cryptocurrencies} from 'src/app/cryptos/depos/page.jsx';
import { Avatar, Menu, Typography } from 'antd';
import icon from '../images/crypto.jpeg';

const Nav = () => {
  return (
    <nav className='flex-between w-full mb-8 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image 
          src='/public/assets/next.svg'
          alt='logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <Image 
          src='/images/crypto.jpeg'
          alt='logo'
          width={30}
          height={30} 
          
        />
        <p className="logo_text">CashToken</p>
        
      </Link>
      <div className='nav-container'>
        <Avatar src={icon} size="large"/>
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined/>}>
            <Link href="components/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined/>}>
            <Link href="src/app/cryptos/depos/page.jsx">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined/>}>
            <Link href="components/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<QrcodeOutlined />}>
            <Link href="components/qrcode">QrCode</Link>
          </Menu.Item>
          <Menu.Item icon={<QrcodeOutlined />}>
            
            <Link href="/QRCODE/repos">QRCODE</Link>

          </Menu.Item>
          

        </Menu>
       

      </div>
      

    </nav>
  )
}

export default Nav