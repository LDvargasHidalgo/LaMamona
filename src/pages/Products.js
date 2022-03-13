import React from 'react'
import Home from '../components/tabProduct/Home'
import Cart from "../components/tabProduct/Cart"
import {CartProvider} from "react-use-cart"

function Products() {
  return (
    <>
    <CartProvider>
      <Home/>
      <Cart/>
      </CartProvider>
    </>
  )
}

export default Products