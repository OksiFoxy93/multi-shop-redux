import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { ReactComponent as RemoveIcon } from "../../../../icons/remove.svg";
import "./ShoppingProduct.scss"

import { setActiveModal, setCurrentProduct, showModal } from "../../../../reducers";
import { Link } from "react-router-dom";
import { Counter}  from "../../../../components/Counter";

const ShoppingProduct = ({ title, price, description, image, category, id, quantityInCart, total }) => {
    const dispatch = useDispatch();

    const currentProduct = {
        title,
        price,
        description,
        image,
        id,
        category,
        quantityInCart,
        total
    }

    const clickRemoveIcon = product => {
        dispatch(setActiveModal("removeProductModal"));
        dispatch(showModal(true));
        dispatch(setCurrentProduct(product));
    }

    return (
        <>
            <div className="shop-product-wrapper">
                <Link to={`/product/${ id }`} className="product-name-wrapper">
                    <div className="img-wrapper">
                        <img src={ image } alt={ title }/>
                    </div>
                    <h3 title={ title }>{ title }</h3>
                </Link>
                <div className="price-wrapper">
                    <span className="price">${ price.toFixed(2) }</span>
                </div>
                <div className="quantity-wrapper">
                    <Counter quantity={ quantityInCart } id={ id } />
                </div>
                <div className="total-wrapper">
                    <span className="price">${ total.toFixed(2) }</span>
                </div>
                <div className="remove-icon-wrapper">
                    <button onClick={ () => clickRemoveIcon(currentProduct) }>
                        <RemoveIcon className="remove-icon"/>
                    </button>
                </div>
            </div>
        </>
    );
};

ShoppingProduct.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.number.isRequired,
    category: PropTypes.string,
};

export default ShoppingProduct;
