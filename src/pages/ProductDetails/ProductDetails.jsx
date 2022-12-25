import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { isFetchingProductDetailsSelector, productDetailsSelector, productsInCartSelector } from "../../selectors";
import { fetchProductDetails, setActiveModal, setCurrentProduct, showModal } from "../../reducers"

import Loader from "../../components/Loader/Loader";
import { ReactComponent as StarIcon } from "../../icons/star-empty.svg"
import { Button } from "../../components/Botton";
import { ReactComponent as ArrowBack } from "../../icons/left-arrow-back.svg";
import "./ProductDetails.scss"

const ProductDetails = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const isFetching = useSelector(isFetchingProductDetailsSelector);
    const product = useSelector(productDetailsSelector);
    const productsInCart = useSelector(productsInCartSelector);

    const {
        title,
        price,
        description,
        image,
        id,
        category,
        rating
    } = product;

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

    const isProductInCart = productsInCart.some(item => item.id === id);
    const textBtn = isProductInCart ? "Already added" : "Add to cart";
    const productPrice = price ? price : 0;


    const clickAddToCart = product => {
        dispatch(setActiveModal("addToCartModal"));
        dispatch(showModal(true));
        dispatch(setCurrentProduct(product));
    }

    useEffect(() => {
        dispatch(fetchProductDetails(productId))
    }, [])

    return (
        <div className="wrapper">
            {
                isFetching ? <Loader /> :
                    <section>
                        <div className="breadcrumbs">
                            <ul>
                                <li>
                                    <Link to="/">Shop</Link><ArrowBack className="arrow-icon" />
                                </li>
                                <li>
                                    <Link to={`/category/${ category }`} className="category-breadcrumbs">{ category }</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="details-product-wrapper">
                            <div className="img-wrapper">
                                <img src={ image } alt={ title }/>
                            </div>
                            <div className="description-wrapper">
                                <h2 className="details-product-title">{ title }</h2>
                                <div className="header-description">
                                    <span className="price">${ productPrice.toFixed(2) }</span>
                                    <div className="category-wrapper">
                                        <div>
                                            <span>Category: </span>
                                            <Link to={`/category/${ category }`} className="category">
                                                { category }
                                            </Link>
                                        </div>
                                        <span>Rating: </span><span>{ rating?.rate.toFixed(1) }<StarIcon className="rating-icon"/></span>
                                    </div>
                                </div>
                                <p>{ description }</p>
                                <div className="button-wrapper">
                                    <Button
                                        isDisabled={ isProductInCart }
                                        onClick={ () => clickAddToCart(currentProduct) }
                                        text={ textBtn }
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
            }
        </div>
    );
};

export default ProductDetails;
