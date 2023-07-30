"use client"
import { Link } from 'react-router-dom';
// import Link from 'next/link'
import React from 'react'

const QRPage = () => {
  return (
    <div className='QR'>
          
        <Link to='/QRCODE/repos' className='btn btn-back'>
          Show QRCode
        </Link>
        

    </div>
  )
}

export default QRPage