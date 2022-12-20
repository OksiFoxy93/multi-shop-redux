import { useEffect } from "react";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";

import { isFetchingSelector, notificationSelector, productItemsSelector } from "../../selectors";
import { fetchProductItems } from "../../reducers"

import { ProductCard } from "../../components/ProductCard";
import { Notification } from "../../components/Notification";
import Loader from "../../components/Loader/Loader";

import "./Shop.scss"

const Shop = () => {
    const dispatch = useDispatch();

    const productItems = useSelector(productItemsSelector);
    const isFetching = useSelector(isFetchingSelector);
    const notification = useSelector(notificationSelector);

    useEffect(() => {
        dispatch(fetchProductItems())
    }, [])

    return (
        <>
            {
                isFetching ? <Loader /> :
                    <section className="products-wrapper wrapper">
                        { !!productItems.length && productItems.map(product => (
                                <ProductCard
                                    { ...product }
                                    key={ product.id }
                                />
                            ))
                        }
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
