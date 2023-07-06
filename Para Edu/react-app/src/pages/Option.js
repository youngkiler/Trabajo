import React from "react";

 

export function Option () {
    return ( 
        <section className="bg-white flex w-full h-full ">
            <div className="container px-8 py-12 mx-auto ">
                <h1 className="font-semibold  flex-row rounded-lg border  text-black text-center lg:text-2xl">Elija una opcion para continuar</h1>

                <div className="flex flex-row rounded-lg border bg-gray-200 p-6 grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://scontent.fcnq4-1.fna.fbcdn.net/v/t1.6435-9/106999719_145989903752526_2152800735431684039_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=fyBNbIRlYfYAX8SbsR7&_nc_ht=scontent.fcnq4-1.fna&oh=00_AfCsxqjg_YNLnkr8L007dB05-4GUry7lnfqhBspWpYclmw&oe=64C0FC14"/>
                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                        <a href="/product" className="text-xl font-semibold text-gray-800 hover:underline ">
                                Listado 
                        </a>
                        <span className="text-sm text-black py-12">Donde se encuentran todos los productos</span>   
                           
                        </div>
                    </div>

                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://www.marketingdirecto.com/wp-content/uploads/2019/07/retail-carrito-compra.jpg" alt=""/>

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <a href="/products" className="text-xl font-semibold text-gray-800 hover:underline ">
                                Compras
                            </a>

                            <span className="text-sm text-black py-12">Es el listado que le aparece disponible a los alumnos</span>
                        </div>
                    </div>

                    <div className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://img.freepik.com/vector-premium/compre-alimentos-linea-ilustracion-vectorial-color-plano-eleccion-alimentos-agregar-al-carrito-servicio-internet-tienda-tableta-lista-productos-mercado-dibujos-animados-2d-primera-vista-mano-resumen-sobre-fondo_151150-7442.jpg?w=996" alt=""/>

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            
                            <a href="/product/create" className="text-xl font-semibold text-gray-800 hover:underline ">
                                Agregar
                            </a>
                            <span className="text-sm text-black py-12">Me permite agregar un nuevo producto a la lista </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
);
}