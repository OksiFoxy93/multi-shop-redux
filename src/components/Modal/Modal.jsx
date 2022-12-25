import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button } from "../Botton";
import { ReactComponent as CrossIcon } from "../../icons/x-mark.svg";
import "./Modal.scss"

import { activeModalSelector, currentProductSelector } from "../../selectors";
import { addProduct, removeProduct, setCurrentProduct, showModal } from "../../reducers";
import { modal } from "../../config/modal-config";

const Modal = ({ closeButton }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
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
        if (activeModal === "orderCompleted" ) return continueShopping();
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
    const continueShopping = () => {
        dispatch(showModal(false));
        navigate('/')
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
                    />
                    <Button
                        text={ secondBtnText }
                        onClick={ handleCloseModal }
                    />
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
