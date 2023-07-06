import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/pedro_s.-logo.png'
import cart from '../img/cart.png'

export default function Header(){
  return (
    <nav className="menu">
            <Link to="/" className="p-0"><img src={logo} alt="logo" className="h-10 w-full"/></Link>
                <ul className="items-center justify-end pr-8">
                    <li className="pr-4"><Link to="/client">Productos</Link></li>
                    <li className="pr-4"><Link to="/about">Acerca de</Link></li>
                    <li><Link to="/carrito"><img src={cart} alt="logo" className="h-8 w-full"/></Link></li>
                </ul>

            </nav>
  )
}

