import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { isFetchingProductItemsSelector, notificationSelector, productItemsSelector } from "../../selectors";
import { fetchProductItems } from "../../reducers"

import { ProductCard } from "./components/ProductCard";
import { Notification } from "../../components/Notification";
import Loader from "../../components/Loader/Loader";

import "./Shop.scss"

const Shop = () => {
    const dispatch = useDispatch();

    const productItems = useSelector(productItemsSelector);
    const isFetching = useSelector(isFetchingProductItemsSelector);
    const notification = useSelector(notificationSelector);

    useEffect(() => {
        dispatch(fetchProductItems())
    }, [])

    return (
        <div className="wrapper">
            {
                isFetching ? <Loader /> :
                    <section>
                        <h1>PRODUCTS</h1>
                        <div className="products-wrapper">
                            { !!productItems.length && productItems.map(product => (
                                <ProductCard
                                    { ...product }
                                    key={ product.id }
                                />))
                            }
                        </div>
                        { notification && <Notification text="Product has been added to favorites list."/> }
                    </section>
            }
        </div>
    );
};

export default Shop;
