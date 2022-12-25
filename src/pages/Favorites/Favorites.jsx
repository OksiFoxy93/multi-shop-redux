import { useSelector } from "react-redux";

import { ProductCard } from "../Shop/components/ProductCard";
import { BackButton } from "../../components/BackButton";
import "./Favorites.scss"

import { favoriteProductsSelector } from "../../selectors";

const Favorites = () => {
    const favoriteProducts = useSelector(favoriteProductsSelector);

    return (
        <div className="wrapper">

            <BackButton />
            {
                favoriteProducts && !!favoriteProducts.length ? (
                    <div>
                        <h1>Favorites</h1>
                        <section className="products-wrapper">
                            {
                                favoriteProducts.map( product => (
                                    <ProductCard
                                        { ...product }
                                        key={ product.id }
                                    />
                                ))
                            }
                        </section>
                    </div>)
                    :
                    (<>
                        <p className="empty-list">The favorites list is currently empty. </p>
                        <p className="empty-list-description">
                            You can add your favorite products on the main page so you don't lose them.
                        </p>
                    </>)
            }
        </div>
    )
};

export default Favorites;
