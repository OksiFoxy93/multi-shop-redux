import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Modal } from "./components/Modal";
import { Header } from "./components/Header";
import { Shop } from "./pages/Shop";
import { Favorites } from "./pages/Favorites";
import { ShoppingCart } from "./pages/ShoppingCart";

import { modal } from "./config/modal-config";
import { getArrInLocalStorage, getCuntNumberInLocalStorage } from "./helpers/localStorage";

import './App.scss';
import { showNotification } from "./helpers/showNotification";

const App = () => {
    const [currentProduct, setCurrentProduct] = useState({});

    // state for shopping cart
    const [productsInCart, setProductsInCart] = useState(getArrInLocalStorage("productsInCart"));
    const [numberProductsInCart,
        setNumberProductsInCart] = useState(getCuntNumberInLocalStorage("productsInCart"));

    // state for favorite product
    const [numberFavoriteProducts,
        setNumberFavoriteProducts] = useState(getCuntNumberInLocalStorage("favoriteProducts"));
    const [favoriteProducts, setFavoriteProducts] = useState(getArrInLocalStorage("favoriteProducts"))
    const [notification, setNotification] = useState(false);

    const [activeModal, setActiveModal] = useState("addToCartModal");
    const [isShowModal, setIsShowModal] = useState(false);
    const { title, text, firstBtnText, secondBtnText } = modal[activeModal]

    const clickAddToCart = product => {
        setActiveModal("addToCartModal");
        setIsShowModal(true);
        setCurrentProduct(product);
    };

    const clickFavoriteIcon = product => {
        if (localStorage.getItem("favoriteProducts")) {
            // if the array with favorites is in local storage
            const allFavoriteProducts = [...JSON.parse(localStorage.getItem("favoriteProducts"))];
            const isFavoriteProduct = allFavoriteProducts.some(item => item.id === product.id);

            if (isFavoriteProduct) {
                // if product already added to favorite list - remove product
                const newListFavoriteProducts = allFavoriteProducts.filter(items => items.id !== product.id)
                newListFavoriteProducts.length === 0 ?
                    localStorage.removeItem('favoriteProducts') :
                    localStorage.setItem('favoriteProducts', JSON.stringify(newListFavoriteProducts))
                setNumberFavoriteProducts(newListFavoriteProducts.length)
                setFavoriteProducts(newListFavoriteProducts);
            } else {
                // added product to favorite list
                allFavoriteProducts.unshift(product);
                localStorage.setItem('favoriteProducts', JSON.stringify(allFavoriteProducts));
                setNumberFavoriteProducts(allFavoriteProducts.length)
                setFavoriteProducts(allFavoriteProducts);
                showNotification(setNotification);
            }
        } else {
            // if the array with favorites not exist in local storage - initial state
            const allFavoriteProducts = [];
            allFavoriteProducts.push(product)
            localStorage.setItem('favoriteProducts', JSON.stringify(allFavoriteProducts))
            setNumberFavoriteProducts(allFavoriteProducts.length)
            setFavoriteProducts(allFavoriteProducts);

            showNotification(setNotification);
        }
    }

    const handleCloseModal = () => {
        setIsShowModal(false);
    };

    // get accept function (when user click OK modal) for different modal type
    const handleAcceptModal = activeModal => {
        if (activeModal === "addToCartModal" ) return () => handleAcceptAddToCart(currentProduct);
        if (activeModal === "removeProductModal" ) return () => removeProductInCart(currentProduct);
    }

    const handleAcceptAddToCart = product => {
        setIsShowModal(false);

        if (localStorage.getItem("productsInCart")) {
            const allProductsInCart = [...JSON.parse(localStorage.getItem("productsInCart"))];
            allProductsInCart.unshift(product);
            localStorage.setItem('productsInCart', JSON.stringify(allProductsInCart));
            setNumberProductsInCart(allProductsInCart.length);
            setProductsInCart(allProductsInCart);
        } else {
            const allProductsInCart = [];
            allProductsInCart.push(product);
            localStorage.setItem('productsInCart', JSON.stringify(allProductsInCart));
            setNumberProductsInCart(allProductsInCart.length);
            setProductsInCart(allProductsInCart);
        }
    };

    const clickRemoveIcon = product => {
        setActiveModal("removeProductModal");
        setIsShowModal(true);
        setCurrentProduct(product);
    }

    const removeProductInCart = product => {
        setIsShowModal(false);

        const allProductsInCart = [...JSON.parse(localStorage.getItem("productsInCart"))];
        const newListProductsInCart = allProductsInCart.filter(items => items.id !== product.id);
        newListProductsInCart.length === 0 ?
            localStorage.removeItem('productsInCart') :
            localStorage.setItem('productsInCart', JSON.stringify(newListProductsInCart));
        setNumberProductsInCart(newListProductsInCart.length);
        setProductsInCart(newListProductsInCart);
    }

    return (
        <div>
            <Header numberFavoriteProducts={ numberFavoriteProducts } numberProductsInCart={ numberProductsInCart }/>

            <Routes>
                <Route path="/" element={<Shop
                    notification={ notification }
                    clickAddToCart={ clickAddToCart }
                    clickFavoriteIcon={ clickFavoriteIcon }
                />} />
                <Route path="favorites" element={<Favorites
                    favoriteProducts={ favoriteProducts }
                    clickAddToCart={ clickAddToCart }
                    clickFavoriteIcon={ clickFavoriteIcon }
                />} />
                <Route path="shopping-cart" element={<ShoppingCart
                    productsInCart={ productsInCart }
                    clickRemoveIcon={ clickRemoveIcon }
                />} />
            </Routes>

            {
                isShowModal && <Modal
                    title={ title }
                    text={ text }
                    handleCloseModal={ handleCloseModal }
                    handleAcceptModal={ handleAcceptModal(activeModal) }
                    firstBtnText={ firstBtnText }
                    secondBtnText={ secondBtnText }
                    currentProduct={ currentProduct }
                />
            }

        </div>
    );
};

export default App;
