import React from 'react'
import Header from '../components/header/Header'
import Cards from  '../components/card/Cards'
import Cart from '../components/tabProduct/Cart'
import {CartProvider} from "react-use-cart"

const Landing = () => {
  return (
    <CartProvider>
     <Header/>
     <Cards/>
     <Cart/>
     </CartProvider>
  )
}

export default Landing