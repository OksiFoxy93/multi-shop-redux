import PropTypes from "prop-types";
import { ProductCard } from "../../components/ProductCard";
import { BackButton } from "../../components/BackButton";

import "./Favorites.scss"

const Favorites = ({ favoriteProducts, clickAddToCart, clickFavoriteIcon }) => {

    return (
        <div className="wrapper">

            <BackButton />
            {
                favoriteProducts && !!favoriteProducts.length ? (
                    <section className="products-wrapper">
                        {
                            favoriteProducts.map( product => (
                                    <ProductCard
                                        { ...product }
                                        key={ product.id }
                                        clickAddToCart={ clickAddToCart }
                                        clickFavoriteIcon={ clickFavoriteIcon } />
                            ))
                        }
                    </section>)
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

Favorites.propTypes = {
    clickAddToCart: PropTypes.func,
    clickFavoriteIcon: PropTypes.func,
    favoriteProducts: PropTypes.array,
};

export default Favorites;
