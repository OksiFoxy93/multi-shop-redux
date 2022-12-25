import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-scroll";

import { BackButton } from "../../components/BackButton";
import { ShoppingProduct } from "./components/ShoppingProduct";
import "./ShoppingCart.scss"

import { productsInCartSelector } from "../../selectors";
import { Checkout } from "./components/Checkout";

const ShoppingCart = () => {
    const [isCheckout, setIsCheckout] = useState(false);
    const productsInCart = useSelector(productsInCartSelector);
    let subtotal = 0;
    const shipping = 50;

    return (
        <div className="wrapper">
            <BackButton />
            {
                productsInCart && !!productsInCart.length ? (
                    <div className="cart-wrapper">
                        <div className="cart-product-wrapper">
                            <h1>Shopping cart</h1>
                            <div className="header">
                                <ul>
                                    <li className="product">Product</li>
                                    <li className="price">Price</li>
                                    <li className="quantity">Quantity</li>
                                    <li className="total">Total</li>
                                    <li className="remove">Remove</li>
                                </ul>
                            </div>
                            <div>
                                <ol className="shop-cart-wrapper">
                                    {
                                        productsInCart.map( product => {
                                            subtotal += product.total;
                                            return (
                                                <li key={ product.id }>
                                                    <ShoppingProduct { ...product } />
                                                </li>
                                            )
                                        })
                                    }
                                </ol>
                            </div>
                        </div>
                        <div className="summary-wrapper">
                            <h2>Cart summary</h2>
                            <div className="cart-summary">
                                <div>
                                    <span>Subtotal</span>
                                    <span>${ subtotal.toFixed(2) }</span>
                                </div>
                                <div>
                                    <span>Shipping</span>
                                    <span>${ shipping }</span>
                                </div>
                                <div className="total">
                                    <span>Total</span>
                                    <span>${ (subtotal + shipping).toFixed(2) }</span>
                                </div>
                                <button>
                                    <Link
                                    to="checkout"
                                    smooth={ true }
                                    duration={ 700 }
                                    onClick={ () => setIsCheckout(true) }
                                    >Proceed To Checkout</Link>
                                </button>
                            </div>
                        </div>
                    </div>)
                    :
                    (<>
                        <p className="empty-list">Your Shopping Cart is empty.</p>
                        <p className="empty-list-description">
                            To add a product to your shopping cart, click the button "Add to cart".
                        </p>
                    </>)
            }
            <div className="checkout-wrapper" id="checkout">
                {
                    isCheckout && (<Checkout setIsCheckout={ setIsCheckout }/>)
                }
            </div>
        </div>
    );
};

export default ShoppingCart;
