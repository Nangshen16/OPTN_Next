import React from 'react'
import Link from "next/link";
import Image from "next/image";
// import {Cryptocurrencies} from '../components';


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
      

    </nav>
  )
}

export default Nav