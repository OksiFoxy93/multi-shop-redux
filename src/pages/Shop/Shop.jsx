import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import { sendRequest } from "../../helpers/sendRequest";
import { GET_ALL_PRODUCTS } from "../../config/api";
import { ProductCard } from "../../components/ProductCard";
import { Notification } from "../../components/Notification";

import "./Shop.scss"
import Loader from "../../components/Loader/Loader";

const Shop = ({ clickAddToCart, clickFavoriteIcon, notification }) => {
    const [productItems, setProductItems] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        setIsFetching(true)
        sendRequest(GET_ALL_PRODUCTS)
            .then(results => {
                setProductItems(results)
            })
            .then(() => setIsFetching(false))
    }, [])

    return (
        <>
            {
                isFetching ? <Loader /> :
                    <section className="products-wrapper wrapper">
                        { !!productItems.length && productItems.map(product => {
                                return <ProductCard
                                    { ...product }
                                    key={ product.id }
                                    clickAddToCart={ clickAddToCart }
                                    clickFavoriteIcon={ clickFavoriteIcon }
                                />
                            }
                        ) }
                        {
                            notification && <Notification text="Product has been added to favorites list."/>
                        }
                    </section>
            }
        </>
    );
};

Shop.propTypes = {
    clickAddToCart: PropTypes.func,
    clickFavoriteIcon: PropTypes.func,
};

export default Shop;
