// "use client"

import React, {useEffect, useState} from 'react'
// import Link from 'antd/es/typography/Link';
import {useGetCryptosQuery} from '../resources/cryptoApi';

const Cryptocurrencies = () => {
  const {data: cryptoFile,isFetching}= useGetCryptosQuery();
  const [cryptos, setCryptos] = useState([]);
  const [searchName, setSearchName] = useState('');
  //this combines the component that start which update for line 13
  useEffect(() => {
    const filteredData=cryptoFile?.data?.coins.filter((coins)=> coins.name.toLowerCase().include(searchName.toLowerCase()));
    setCryptos(filteredData)
  }, [cryptoFile, searchName])
  
  return (
    <>
        {/* <div className="search crypto">
          <input className="border-normal-text focus:outline-none border border-solid
                    box-border w-full rounded-lg
                    text-normal-text text-sm p-2
                    dark:border-off-white dark:bg-background-dark-mode dark:text-off-white"
                  placeholder='Search CryptoCurrencies'
                    />

        </div> */}
    </>
    
  )
}
export default Cryptocurrencies;