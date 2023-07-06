import { Route, Routes, Link } from "react-router-dom"
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductsDetails";
import EditProduct from "./pages/ProductEdit";
import ProductAdd from "./pages/ProductAdd";  
import { Register } from "./pages/Register";
import { Option } from "./pages/Option";

export default function App() {
    return (
        <>


            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={< About/>} />
                <Route path="/products" element={< Products />} /> 
                <Route path="/product/create" element={< ProductAdd />} />
                <Route path="/product" element={< ProductDetails/>} />
                <Route path="/product/:id/edit" element={< EditProduct/>} />
                <Route path="*" element={<NotFound />} />
                <Route path="/register" element={<Register />} /> 
                <Route path="/options" element={<Option />} />
            </Routes>
        </>
    );


}