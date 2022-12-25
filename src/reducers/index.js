import shopReducer, { fetchProductItems } from "./shopReducer";
import favoritesReducer, { toggleFavoriteProduct } from "./favoritesReducer";
import shoppingCartReducer, {
    removeProduct,
    addProduct,
    increaseQuantity,
    decreaseQuantity,
    makeOrder
} from "./shoppingCartReducer";
import appReducer, { showModal, setCurrentProduct, setActiveModal } from "./appReducer";
import productDetailsReducer, { fetchProductDetails } from "./productDetailsReducer";
import categoryReducer, { fetchCategoryProductItems } from "./categoryReducer";

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
    addProduct,
    increaseQuantity,
    decreaseQuantity,
    makeOrder,
    productDetailsReducer,
    fetchProductDetails,
    categoryReducer,
    fetchCategoryProductItems
}
