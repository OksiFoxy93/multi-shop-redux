import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { Modal } from "./components/Modal";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Shop } from "./pages/Shop";
import { Favorites } from "./pages/Favorites";
import { ShoppingCart } from "./pages/ShoppingCart";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Category from "./pages/Category/Category";
import './App.scss';

import { isShowModalSelector } from "./selectors";

const App = () => {
    const isShowModal = useSelector(isShowModalSelector);

    return (
        <div className="app-wrapper">
            <Header />

            <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="product/:productId" element={<ProductDetails />} />
                <Route path="category/:categoryName" element={<Category />} />
                <Route path="favorites" element={<Favorites />} />
                <Route path="shopping-cart" element={<ShoppingCart />} />
            </Routes>

            <Footer />

            { isShowModal && <Modal /> }
        </div>
    );
};

export default App;
