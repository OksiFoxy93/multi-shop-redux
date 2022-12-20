export const productItemsSelector = state => state.shop.productItems;
export const isFetchingSelector = state => state.shop.isFetching;

export const favoriteProductsSelector = state => state.favorites.favoriteProducts;
export const numberFavoriteProductsSelector = state => state.favorites.favoriteProducts.length;
export const notificationSelector = state => state.favorites.notification;

export const productsInCartSelector = state => state.shoppingCart.productsInCart;
export const numberProductsInCartSelector = state => state.shoppingCart.productsInCart.length;

export const currentProductSelector = state => state.home.currentProduct;
export const isShowModalSelector = state => state.home.isShowModal;
export const activeModalSelector = state => state.home.activeModal;
