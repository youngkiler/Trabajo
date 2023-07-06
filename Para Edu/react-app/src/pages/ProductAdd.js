import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Products.css";
import ProductBar from "../components/ProductBar";

function CreateProduct() {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fechaact, setFechaAct] = useState("");
  const navegate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newProduct = {
      name: nombre,
      price: precio,
      stock: stock,
      category: categoria,
      fechaact: fechaact,
    };

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/product`, newProduct);
      console.log("Product created successfully:", response.data);
      // Realiza las acciones necesarias después de crear el producto
      navegate("/products");
    } catch (error) {
      console.error("Error creating product:", error);
      // Maneja el error de creación del producto
      alert("Error creando producto");
    }
  };

  return (/*
    <div className="page-container">
      <h2>Crear Producto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Precio:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
        <Link to={`/products`}>
          <button>Cancelar</button>
        </Link>
          <button type="submit">Crear</button>
        </div>
      </form>
    </div>

*/
<> 
<ProductBar />
<div className="min-h-screen bg-gray-100 flex flex-col justify-center pt-20">
   <div className="relative py-3 sm:max-w-xl sm:mx-auto">
   <div
			className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
      <div> 
         <div className=" bg-white rounded-lg shadow relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20  "> 
         <h1 className="inline text-3xl font-semibold leading-none pl-5 text-2xl">Nuevo Producto</h1>

               <form onSubmit={handleSubmit}>
                  <div className="px-5 pb-5 py-8">
                    <input  placeholder="Nombre" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}
                            className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   
                            transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  
                            focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                    <div className="flex">
                        <div className="flex-grow w-1/4 pr-2">
                          <input  placeholder="Stock" type="number" value={stock} onChange={(e) => setStock(e.target.value)}
                                  className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   
                                  transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  
                                  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                          </div>
                        <div className="flex-grow">
                          <input placeholder="Fecha" type="date" value={fechaact} onChange={(e) => setFechaAct(e.target.value)}
                                  className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base  
                                   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  
                                   focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                        </div>
                    </div>
                   
                    <input placeholder="Precio" type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} 
                              className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   
                              transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  
                              focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/> 
                      <input  placeholder="Categoria" type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)}
                              className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   
                              transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  
                              focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                  </div>
                  <div className="flex flex-row-reverse p-3"> 
                    <div className="flex-initial pl-1"> 
                        <button  type="submit" className="flex items-center px-2 py-2.5 font-medium tracking-wide text-white capitalize rounded-md bg-cyan-950 hover:bg-gray-800 focus:bg-gray-900 focus:outline-none transition duration-300 transform active:scale-95 ease-in-out">
                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                              <path d="M0 0h24v24H0V0z" fill="none"></path>
                              <path d="M8 9h8v10H8z" opacity=".10"></path>
                              <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                          </svg>
                          <span className="pl-1" >Guardar</span>
                        </button> 
                    </div>
                    <div className="flex-initial">
                    <Link to={`/options`}>
                        <button type="button" className="flex items-center px-2 py-2.5 font-medium tracking-wide text-white capitalize rounded-md  bg-red-400  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out">
                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                              <path d="M0 0h24v24H0V0z" fill="none"></path>
                              <path d="M8 9h8v10H8z" opacity=".3"></path>
                              <path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"></path>
                          </svg>
                          <span className="pl-1">Cancelar</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </form>
             
            <hr className="mt-4"/>

         </div>  
      </div>
   </div>
</div> 
</> 
  );
}

export default CreateProduct;