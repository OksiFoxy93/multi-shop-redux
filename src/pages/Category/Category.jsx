import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
    categoryIsFetchingProductItemsSelector,
    categoryProductItemsSelector,
} from "../../selectors";
import { fetchCategoryProductItems } from "../../reducers"

import { ProductCard } from "../Shop/components/ProductCard";
import Loader from "../../components/Loader/Loader";
import { BackButton } from "../../components/BackButton";

import "./Category.scss"

const Category = () => {
    const dispatch = useDispatch();
    const { categoryName } = useParams();

    const productItems = useSelector(categoryProductItemsSelector);
    const isFetching = useSelector(categoryIsFetchingProductItemsSelector);

    useEffect(() => {
        dispatch(fetchCategoryProductItems(categoryName))
    }, [categoryName])

    return (
        <div className="wrapper">
            <BackButton />

            {
                isFetching ? <Loader /> :
                    <section>
                        <h1>{ categoryName }</h1>
                        <div className="products-wrapper">
                            { !!productItems.length && productItems.map(product => (
                                <ProductCard
                                    { ...product }
                                    key={ product.id }
                                />))
                            }
                        </div>
                    </section>
            }
        </div>
    );
};

export default Category;
