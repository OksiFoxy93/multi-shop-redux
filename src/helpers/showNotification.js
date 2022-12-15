export const showNotification = (setNotification) => {
    setNotification(true);
    setTimeout(setNotification, 1500, false)
}
