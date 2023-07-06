import React, { useContext } from 'react'
import {dataContext} from "./ProductContext"

const CartElement = () => {
    const {cart} = useContext(dataContext)

  return cart.map((product) => {
    console.log(product)
    return(
        <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img src={product.img} alt='Product Image' className="h-full w-full object-cover object-center"/>
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>{product.name}
                                      </h3>
                                      <p className="ml-4">{product.price}</p>
                                    </div>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
    )
  })
}

export default CartElement
