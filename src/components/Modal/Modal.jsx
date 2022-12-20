import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../Botton";
import { ReactComponent as CrossIcon } from "../../icons/x-mark.svg";
import "./Modal.scss"

import { activeModalSelector, currentProductSelector } from "../../selectors";
import { addProduct, removeProduct, setCurrentProduct, showModal } from "../../reducers";
import { modal } from "../../config/modal-config";

const Modal = ({ closeButton }) => {
    const dispatch = useDispatch()
    const currentProduct = useSelector(currentProductSelector);
    const activeModal = useSelector(activeModalSelector);
    const { title, text, firstBtnText, secondBtnText } = modal[activeModal]

    const handleCloseModal = () => {
        dispatch(showModal(false));
        dispatch(setCurrentProduct({}));
    };

    // get accept function (when user click OK in modal) for different modal type
    const handleAcceptModal = (activeModal, product) => {
        if (activeModal === "addToCartModal" ) return addProductToCart(product);
        if (activeModal === "removeProductModal" ) return removeProductInCart(product);
    }

    const addProductToCart = product => {
        dispatch(showModal(false));
        dispatch(setCurrentProduct({}));
        dispatch(addProduct(product));
    };

    const removeProductInCart = product => {
        dispatch(showModal(false));
        dispatch(setCurrentProduct({}));
        dispatch(removeProduct(product));
    }

    const onModalBodyClick = ev => ev.stopPropagation();

    return (
        <div className="modal-wrapper" onClick={ handleCloseModal }>
            <div className="modal" onClick={ onModalBodyClick }>
                <div className="header">
                    <h3>{ title }</h3>
                    { closeButton && (
                        <CrossIcon className="close-icon" onClick={ handleCloseModal } />
                    )}
                </div>
                <p className="modal-text">{ text }</p>
                <div className="modal-button-wrapper">
                    <Button
                        text={ firstBtnText }
                        onClick={ () => handleAcceptModal(activeModal, currentProduct) }
                        textColorBtn="#414040"
                        backgroundColor="#ffd333" />
                    <Button
                        text={ secondBtnText }
                        onClick={ handleCloseModal }
                        textColorBtn="#fff" />
                </div>
            </div>
        </div>
    );
};

export default Modal;

Modal.defaultProps = {
    closeButton: true
};

Modal.propTypes = {
    closeButton: PropTypes.bool,
};
