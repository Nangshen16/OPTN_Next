"use client"
import React from 'react'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiCaptions =  {
    'X-RapidAPI-Key': '3c75dad19emshbbaa068eccb5200p195ad8jsn546ff5a8c5da',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  
}
// console.log(cryptoApiCaptions);

const baseUrl = 'https://coinranking1.p.rapidapi.com';
// console.log(baseUrl)

const createRequest = (url) => ({ url, headers: cryptoApiCaptions})

export const cryptoApi= createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })

    })
    

});

export const {
    useGetCryptosQuery,
    
    
}=cryptoApi;