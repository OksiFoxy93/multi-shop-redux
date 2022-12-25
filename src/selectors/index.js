export const productItemsSelector = state => state.shop.productItems;
export const isFetchingProductItemsSelector = state => state.shop.isFetching;

export const favoriteProductsSelector = state => state.favorites.favoriteProducts;
export const numberFavoriteProductsSelector = state => state.favorites.favoriteProducts.length;
export const notificationSelector = state => state.favorites.notification;

export const productsInCartSelector = state => state.shoppingCart.productsInCart;
export const numberProductsInCartSelector = state => {
    const productsInCart = state.shoppingCart.productsInCart;
    let numberProducts = 0;
    productsInCart.forEach(product => numberProducts += product.quantityInCart);
    return numberProducts;
}

export const currentProductSelector = state => state.home.currentProduct;
export const isShowModalSelector = state => state.home.isShowModal;
export const activeModalSelector = state => state.home.activeModal;

export const productDetailsSelector = state => state.productDetails.product;
export const isFetchingProductDetailsSelector = state => state.productDetails.isFetching;

export const categoryProductItemsSelector = state => state.category.productItems;
export const categoryIsFetchingProductItemsSelector = state => state.category.isFetching;
