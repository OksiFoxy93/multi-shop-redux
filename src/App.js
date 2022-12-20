import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { Modal } from "./components/Modal";
import { Header } from "./components/Header";
import { Shop } from "./pages/Shop";
import { Favorites } from "./pages/Favorites";
import { ShoppingCart } from "./pages/ShoppingCart";
import './App.scss';

import { isShowModalSelector } from "./selectors";

const App = () => {
    const isShowModal = useSelector(isShowModalSelector);

    return (
        <div>
            <Header />

            <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="favorites" element={<Favorites />} />
                <Route path="shopping-cart" element={<ShoppingCart />} />
            </Routes>

            { isShowModal && <Modal /> }
        </div>
    );
};

export default App;
