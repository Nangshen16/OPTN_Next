"use client"

import { response } from 'express';
import React from 'react'

const Cryptos = async() => {
    const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
    const options = {
	      method: 'GET',
	      headers: {
		     'X-RapidAPI-Key': '3c75dad19emshbbaa068eccb5200p195ad8jsn546ff5a8c5da',
		     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	      }
    };
    try {
        const response = await fetch(url, options);
        console.log(response);
        const result = await response.text();
        
    } catch (error) {
        console.error(error);
    }
      return  <div className="depos-container">
          <h1>CRYPTOTESTING</h1>
          <ul className="depos-list">
              
          </ul>


      </div>;
           
        // <div>
        //     <h1>CRYPTOTESTING</h1>

        // </div>
         
          
        
      
};

export default Cryptos;

