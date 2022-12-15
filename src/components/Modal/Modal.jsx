import PropTypes from "prop-types";

import { Button } from "../Botton";
import { ReactComponent as CrossIcon } from "../../icons/x-mark.svg";

import "./Modal.scss"

const Modal = ({ title, closeButton, text, handleCloseModal, handleAcceptModal, currentProduct, firstBtnText,
                   secondBtnText }) => {

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
                        onClick={ () => handleAcceptModal(currentProduct) }
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
    title: PropTypes.string.isRequired,
    closeButton: PropTypes.bool,
    text: PropTypes.string.isRequired,
    handleCloseModal: PropTypes.func,
    handleAcceptModal: PropTypes.func,
    currentProduct: PropTypes.object,
    firstBtnText: PropTypes.string,
};
