import React from 'react'
import {ShoppingCart} from '../components/ShoppingCart'

const Cart = ({ isCartOpen, toggleCart }) => {
    console.log("From Cart : " , isCartOpen)
  return (
    <div className='z-10'><ShoppingCart isCartOpen={isCartOpen} toggleCart={toggleCart}/></div>
  )
}

export default Cart 