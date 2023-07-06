import '../App.css';
import NavBar from '../components/NavBar';
import React from 'react';


export function Home () {
  return ( 
       
<div className="w-full">
<NavBar/>
<nav className="bg-white shadow-lg">
    <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
        <div className="flex justify-between items-center"> 
            <div className="md:hidden">
                <button type="button" className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path className="hidden" d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"/>
                        <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                    </svg>
                </button>
            </div>
        </div> 
    </div>
</nav>
<div className="flex bg-white estiloancho">
    <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
        <div>
            <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">Bienvenidos al <span className="text-indigo-600">Bar de Pedro</span></h2>
            <p className="mt-2 text-sm text-gray-500 md:text-base">
                Ésta a punto de ingresar a la pagina de compra y venta de productos de la cantidad de 
                <span className="text-indigo-600"> Facultad Regional Resistencia</span>, 
                por favor indique que desea realizar primero.</p>
                <a className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800" href="/options">Ingresar</a> 
        </div>
    </div>
    <div className="hidden lg:block lg:w-1/2 otroestilo" >
        <div className="h-full object-cover estilo">
            <div className="h-full bg-black opacity-25"></div>
        </div>
    </div>
</div>
</div>
);
  
}