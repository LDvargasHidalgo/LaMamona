import React from 'react'
import Home from '../components/tabProduct/Home'
import Cart from "../components/tabProduct/Cart"
import {CartProvider} from "react-use-cart"

function Products() {
  return (
    <>
    <>
      <Home/>
      <Cart/>
      </>
    </>
  )
}

export default Products