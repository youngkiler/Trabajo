import { Link } from "react-router-dom"
import logo from '../img/pedro_s.-logo.png'
import Carrito from "./Carrito";


export default function NavBar() {
    return (
        <>
            <nav className="menu">
            <Link to="/" className="p-0"><img src={logo} alt="logo" className="h-10 w-full"/></Link>
                <ul className="items-center justify-end pr-8">
                    <li className="pr-4"><Link to="/client">Productos</Link></li>
                    <li className="pr-4"><Link to="/about">Acerca de</Link></li>
                    <Carrito/>

                </ul>

            </nav>
        </>
    );

    }
