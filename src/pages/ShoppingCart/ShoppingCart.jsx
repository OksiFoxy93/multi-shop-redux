import { useSelector } from "react-redux";

import { BackButton } from "../../components/BackButton";
import { ShoppingProduct } from "../../components/ShoppingProduct";
import "./ShoppingCart.scss"

import { productsInCartSelector } from "../../selectors";

const ShoppingCart = () => {
    const productsInCart = useSelector(productsInCartSelector);

    return (
        <div className="wrapper">
            <BackButton />

            {
                productsInCart && !!productsInCart.length ? (
                        <ol className="shop-cart-wrapper">
                            {
                                productsInCart.map( (product, index) => (
                                    <li key={ product.id }>
                                        <ShoppingProduct
                                            { ...product }
                                            listNumber={ index + 1 }
                                        />
                                    </li>
                                ))
                            }
                        </ol>)
                    :
                    (<>
                        <p className="empty-list">The Cart is empty. </p>
                        <p className="empty-list-description">
                            To add a product to your shopping cart, click the button "Add to cart".
                        </p>
                    </>)
            }
        </div>
    );
};

export default ShoppingCart;
