import Layout from '@/components/Layout';
import React from 'react'
import {useEffect, useState} from 'react';
import axios from 'axios';


const Order = () => {
  const [order, setOrder] = useState([]);

  const getOrder = async () => {
    const response = await axios("/api/orders");
    setOrder(response.data);
  };

  useEffect(() => {
    getOrder();
  },[]);
  return (
    <Layout>
      <h1>Order</h1>
      <table className='basic'>
        <thead>
          <tr>
            <td>Order Name</td>
            <td>Order Price</td>
            <td>Order time</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            {}
          </tr>
        </tbody>
      </table>
    </Layout>
  )
}

export default Order