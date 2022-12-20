export const getArrInLocalStorage = name => {
    if(localStorage.getItem(name)) {
        return [...JSON.parse(localStorage.getItem(name))];
    }
    return [];
}
