'use client'
import React, { useState } from 'react'

interface CartCounterProps {
  items?: number
}

const CartCounter = ({ items = 0 }: CartCounterProps) => {
  const [cartItems, setCartItems] = useState(items)

  const handleIncrement = (value = 1) => {
    setCartItems((prev) => prev + value)
  }

  const handleDecrement = (value = 1) => {
    setCartItems((prev) => prev - value)
  }

  return (
    <>
      <span>{cartItems}</span>
      <div className='flex gap-2'>
        <button onClick={() => handleDecrement()} className='px-4 py-2 text-white bg-rose-500 rounded-md'>-</button>
        <button onClick={() => handleIncrement()} className='px-4 py-2 text-white bg-blue-500 rounded-md'>+</button>
      </div>
    </>
  )
}

export default CartCounter
