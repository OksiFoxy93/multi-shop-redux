import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../../../../components/Botton";
import { ReactComponent as StarIcon } from "../../../../icons/star.svg"
import { ReactComponent as StarIconEmpty } from "../../../../icons/star-empty.svg";
import "./ProductCard.scss"

import { getWrappedValue } from "../../../../helpers/getWrappedValue";
import { setActiveModal, setCurrentProduct, showModal, toggleFavoriteProduct } from "../../../../reducers";
import { favoriteProductsSelector, productsInCartSelector } from "../../../../selectors";
import { Link } from "react-router-dom";

const ProductCard = ({ title, price, description, image, id, category }) => {
    const dispatch = useDispatch();
    const favoriteProducts = useSelector(favoriteProductsSelector);
    const productsInCart = useSelector(productsInCartSelector);

    const isFavoriteProduct = favoriteProducts.some(item => item.id === id);
    const isProductInCart = productsInCart.some(item => item.id === id);

    const textBtn = isProductInCart ? "Already added" : "Add to cart";

    const clickAddToCart = product => {
        dispatch(setActiveModal("addToCartModal"));
        dispatch(showModal(true));
        dispatch(setCurrentProduct(product));
    }

    const clickFavoriteIcon = product => {
        dispatch(toggleFavoriteProduct(product));
    }

    const currentProduct = {
        title,
        price,
        description,
        image,
        id,
        category,
        quantityInCart: 1,
        total: price
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
                <Link to={`/product/${id}`}>
                    <img src={ image } alt={ title }/>
                </Link>
            </div>
            <div className="product-info">
                <Link to={`/product/${id}`}>
                    <h3 title={ title }>{ getWrappedValue(title, 45) }</h3>
                    <p>{ getWrappedValue(description, 85) }</p>
                </Link>
                <div className="product-price">
                    <span>$ { price.toFixed(2) }</span>
                    <Button
                        isDisabled={ isProductInCart }
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
};

export default ProductCard;
