import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SelectList from './SelectList.js';
import './Cart.css';

export default function Cart() {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/cart').then((res) => {
            setCart(res.data);
        })
    }, []);

    console.log(cart);

  return (
    <>
    <h1>Cart Products</h1>
    {/* <div>{cart.map((c) => (
        <SelectList
        title={c.product.productName}
        images={c.product.productImage}
        unitPrice={c.product.unitPrice}
        isFromCart={true}
        cartQuantity={c.quantity || 0}
        productId={c.product._id}
        />))
        }</div> */}
      </>
  )
}
