import React, { useContext }  from 'react'
import {dataContext} from "./ProductContext"

const CartTotal = () => {
    const {cart} = useContext(dataContext)

    const total = cart.reduce((acc,el) => acc + el.price,0)
  return (
    <div className="flex justify-between text-base font-medium text-gray-900">
        <p>Subtotal</p>
        <p>${total}</p>
    </div>
  )
}

export default CartTotal