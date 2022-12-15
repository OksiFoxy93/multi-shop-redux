import PropTypes from "prop-types";

import { ReactComponent as RemoveIcon } from "../../icons/remove.svg";

import "./ShoppingProduct.scss"

const ShoppingProduct = ({ title, price, description, image, category, id, clickRemoveIcon, listNumber }) => {

    const currentProduct = {
        title,
        price,
        description,
        image,
        id,
        category
    }

    return (
        <>
            <p className="list-number-product">
                { listNumber }.
            </p>
            <div className="shop-product-wrapper">
                <div className="img-wrapper">
                    <img src={ image } alt={ title }/>
                </div>
                <div className="description-wrapper">
                    <h3>{ title }</h3>
                    <span>Category: </span><span className="category">{ category }</span>
                    <p>{ description }</p>
                </div>
            </div>
            <div className="price-wrapper">
                <span className="price">${ price.toFixed(2) }</span>
            </div>
            <button className="remove-icon-wrapper" onClick={ () => clickRemoveIcon(currentProduct) }>
                <RemoveIcon className="remove-icon"/>
            </button>
        </>
    );
};

ShoppingProduct.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.number.isRequired,
    clickRemove: PropTypes.func,
    category: PropTypes.string,
    listNumber: PropTypes.number,
};

export default ShoppingProduct;
