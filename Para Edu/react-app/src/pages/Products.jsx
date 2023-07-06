import React, { useState, useEffect } from "react";
import "../css/Products.css";
import axios from "axios";
import ProductBar from "../components/ProductBar";




 function Products() {

    const [products, setProducts] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const urlGet = `${process.env.REACT_APP_API_URL}/product`;
      console.log(urlGet);
      const response = await axios.get(urlGet);
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
 
   

    return (

 <>

 <ProductBar/>
 
<div className="flex items-center justify-center flex-col bg-[#E5E5E5] min-h-screen">
           
                         
        <div className="bg-[#F4F5FA] p-10 rounded-xl"> 
        <button className="pl-3 inline-block no-underline hover:text-black" href="#" id="carrito">
            <svg className="fill-current  hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                        <circle cx="10.5" cy="18.5" r="1.5" />
                        <circle cx="17.5" cy="18.5" r="1.5" />
                         </svg> 
        </button>
          
            <div className="flex flex-col justify-center items-center text-center" id="lista-cursos">
                <div className="max-w-sm font-bold font-sans">
                    Productos Disponibles
                </div>
                <div className="font-light max-w-lg mt-5 text-sm">
                    Puede ir eligiendo los productos en stock e ir añadiendolos al carrito
                </div>
            </div>
            <div id="lista-cursos" className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
                {
                    products?.map((product) => (
                        <div className="bg-[#ECEEFF] rounded-xl">
                            <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                                <img src="https://scontent.fcnq4-1.fna.fbcdn.net/v/t1.6435-9/96421548_1478950342311046_4868820461988872192_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=05ETLItiTCsAX9uwqLz&_nc_ht=scontent.fcnq4-1.fna&oh=00_AfA63UvOhrv4kD3NCUza_D5WfH509vyIH9lZiUmflC4EQQ&oe=64A6A1F5" 
                                alt='some value' className="w-10" />
                                <div className="mt-3 font-semibold text-lg">{product.name}</div>
                                <div className="text-sm font-light w-60 md:w-auto">Stock: {product.stock} u.</div>
                                <div className="my-4">
                                    <span className="font-bold text-base">${product.price} ARS</span> 
                                </div>
                            </div>
                        </div>
                    ))
                }
         </div>   
                
        

            <div className="flex justify-center">
                <button className="mt-12 bg-slate-900 text-white px-4 rounded-full py-3">Finalizar</button>
            </div>
        </div>
        <script>
                     eventslisteners();
                </script>
    </div>
      </>
    );
  }

  export default Products;