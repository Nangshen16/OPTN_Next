import React from 'react'
// import Link from 'next/link'

// import {Cryptocurrencies} from "../components";
// import { useGetCryptosQuery } from '../resources/cryptoApi';
// const HomePage = () => {
//   const {data, isFetching} = useGetCryptosQuery();
//   console.log(data);
//   return (
//     <>
//         <div className="search crypto">
//           <input className="border-normal-text focus:outline-none border border-solid
//                     box-border w-full rounded-lg
//                     text-normal-text text-sm p-2
//                     dark:border-off-white dark:bg-background-dark-mode dark:text-off-white"
//                   placeholder='Search CryptoCurrencies'
//                     />

//         </div>
//     </>

//   )
// }

// export default HomePage

import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
const {Title } = Typography;

import { useGetCryptosQuery } from '../resources/cryptoApi';

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  console.log(data);
  return (
    <>
       <Title level={2} className="heading">Bitcoin Bay TOKEN</Title>
       <Row>
            <Col span={15}><Statistic title="Total Cryptocurrencies" value="5"/></Col>
            <Col span={15}><Statistic title="Total Exchanges" value="5"/></Col>
            <Col span={15}><Statistic title="Total Prices" value="5"/></Col>

       </Row>


    </>
  )
}

export default Homepage