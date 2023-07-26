"use client"

import React, {useEffect, useState} from 'react'
import Link from "next/link";
import Image from "next/image";
// import {Cryptocurrencies} from '../components/Cryptocurrencies';
import {HomeOutlined,FundOutlined,MoneyCollectOutlined} from '@ant-design/icons';
import {Cryptocurrencies} from './Cryptocurrencies';
import { Avatar, Menu, Typography } from 'antd';


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
        <Avatar/>
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined/>}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined/>}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined/>}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>

        </Menu>
       

      </div>
      

    </nav>
  )
}

export default Nav