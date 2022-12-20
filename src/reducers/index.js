import shopReducer, { fetchProductItems } from "./shopReducer";
import favoritesReducer, { toggleFavoriteProduct } from "./favoritesReducer";
import shoppingCartReducer, { removeProduct, addProduct } from "./shoppingCartReducer";
import appReducer, { showModal, setCurrentProduct, setActiveModal } from "./appReducer";

export {
    appReducer,
    showModal,
    setCurrentProduct,
    setActiveModal,
    shopReducer,
    fetchProductItems,
    favoritesReducer,
    toggleFavoriteProduct,
    shoppingCartReducer,
    removeProduct,
    addProduct
}
