import PropTypes from "prop-types";

import { Button } from "../Botton";
import { ReactComponent as StarIcon } from "../../icons/star.svg"
import { ReactComponent as StarIconEmpty } from "../../icons/star-empty.svg";

import { getWrappedValue } from "../../helpers/getWrappedValue";
import { checkIsFavoriteProduct, checkIsProductInCart } from "../../helpers/localStorage";

import "./ProductCard.scss"

const ProductCard = ({ title, price, description, image, id, clickAddToCart, clickFavoriteIcon, category }) => {
    const isFavoriteProduct = checkIsFavoriteProduct(id);
    const textBtn = checkIsProductInCart(id) ? "Already added" : "Add to cart";

    const currentProduct = {
        title,
        price,
        description,
        image,
        id,
        category
    }

    return (
        <div className="product-wrapper">
            <div className="star-icon-wrapper" onClick={ () => clickFavoriteIcon(currentProduct) }>
                {
                    isFavoriteProduct ?
                        <StarIcon className="star-icon"/>
                        :
                        <StarIconEmpty className="star-icon"/>
                }
            </div>
            <div className="img-wrapper">
                <img src={ image } alt={ title }/>
            </div>
            <div className="product-info">
                <h3 title={ title }>{ getWrappedValue(title, 45) }</h3>
                <p>{ getWrappedValue(description, 85) }</p>
                <div className="product-price">
                    <span>$ { price.toFixed(2) }</span>
                    <Button
                        isDisabled={ checkIsProductInCart(id) }
                        onClick={ () => clickAddToCart(currentProduct) }
                        text={ textBtn } />
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.number.isRequired,
    clickAddToCart: PropTypes.func,
    clickFavoriteIcon: PropTypes.func
};

export default ProductCard;
