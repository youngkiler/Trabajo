import { useContext } from "react";
import {dataContext} from "../components/ProductContext"
import "../css/Products.css";


export default function ProductList() {
    const {data, cart, setCart}=useContext(dataContext);
    const buyProducts = (product) =>{
        console.log(product);
		setCart([...cart,product]);
    }
    return data.map((product) => {
        return(
                <div id="lista-cursos" className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
                    <div className="bg-[#FFFBEC] rounded-xl">
                        <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto" key={product.id}>
                            <img src={product.img} alt='some value' className="w-12 imagen-curso" id="imagen"/>
                            <div className="mt-3 font-semibold text-lg">
                            <h6 id="titulo">{product.nameProduct}</h6> 
                                </div>
                            <div className="text-sm font-light">Stock:{product.stock} u.</div>
                            <div className="my-4">
                                <span className="font-bold text-base precio" id="precio">${product.price} ARS</span> 
                            </div> 
                                    <button onClick ={() => buyProducts(product)} className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4 agregar-carrito" data-id="1">
                                    Comprar
                                    </button> 
                        </div>
                    </div>
                </div>
                
        
        )
    })
}