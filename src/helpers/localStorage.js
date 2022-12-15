export const getCuntNumberInLocalStorage = name => {
    if(localStorage.getItem(name)) {
        const arr = [...JSON.parse(localStorage.getItem(name))];
        return arr.length;
    }
    return 0;
}

export const getArrInLocalStorage = name => {
    if(localStorage.getItem(name)) {
        return [...JSON.parse(localStorage.getItem(name))];
    }
    return [];
}

export const checkIsProductInCart = id => {
    if(localStorage.getItem("productsInCart")) {
        const arr = [...JSON.parse(localStorage.getItem("productsInCart"))];
        return arr.some(item => item.id === id);
    }
    return false;
}

export const checkIsFavoriteProduct = id => {
    if (localStorage.getItem("favoriteProducts")) {
        const allFavoriteProducts = [...JSON.parse(localStorage.getItem("favoriteProducts"))];
        return allFavoriteProducts.some(item => item.id === id);
    }

    return false;
}
