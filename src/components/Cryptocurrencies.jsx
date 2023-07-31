// // "use client"

// import React, {useEffect, useState} from 'react'
// // import Link from 'antd/es/typography/Link';
// import {useGetCryptosQuery} from '../resources/cryptoApi';

// const Cryptocurrencies = () => {
//   const {data: cryptoFile,isFetching}= useGetCryptosQuery();
//   const [cryptos, setCryptos] = useState([]);
//   const [searchName, setSearchName] = useState('');
//   //this combines the component that start which update for line 13
//   useEffect(() => {
//     const filteredData=cryptoFile?.data?.coins.filter((coins)=> coins.name.toLowerCase().include(searchName.toLowerCase()));
//     setCryptos(filteredData)
//   }, [cryptoFile, searchName])
  
//   return (
//     <>
//         {/* <div className="search crypto">
//           <input className="border-normal-text focus:outline-none border border-solid
//                     box-border w-full rounded-lg
//                     text-normal-text text-sm p-2
//                     dark:border-off-white dark:bg-background-dark-mode dark:text-off-white"
//                   placeholder='Search CryptoCurrencies'
//                     />

//         </div> */}
//     </>
    
//   )
// }
// export default Cryptocurrencies;
// import React from 'react'
// import Link from 'next/link';

// async function fetchRepoContents(name) {
//   await new Promise((resolve) => setTimeout(resolve, 3000));

//   const response= await fetch(
//     `https://coinranking1.p.rapidapi.com`
//   );
//   const contents = await response.json();
//   return contents;
// }
// const Cryptocurrencies = async({name}) => {
//   const contents= await fetchRepoContents(name);
//   const dirs = contents.filter((content) => content.type === 'dir');
//   return (
//     <>
//         <h1>Rapid API</h1>
//         <ul>
//           {dirs.map((dir)=>(
//             <li key={dir.path}>
//               <Link href={`/resources/cryptoApi/${name}/${dir.path}`}>
//                 {dir.path}
//               </Link>
//             </li>
//           )

//           )}
//         </ul>

//     </>

//   )
// }

// export default Cryptocurrencies


// const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '3c75dad19emshbbaa068eccb5200p195ad8jsn546ff5a8c5da',
// 		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }