"use client"

import { response } from 'express';
import React from 'react'

const Cryptos = async() => {
    const url = 'https://coinranking1.p.rapidapi.com/coins';
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
      return (
          
        <div>
            <h1>CRYPTOTESTING</h1>

        </div>
         
          
        
      )
};

export default Cryptos;

