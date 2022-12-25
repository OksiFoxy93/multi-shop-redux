import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as StarIcon } from "../../icons/star.svg";
import { ReactComponent as ShoppingCartIcon } from "../../icons/shopping-cart.svg";
import "./Header.scss";

import { numberFavoriteProductsSelector, numberProductsInCartSelector } from "../../selectors";
import { ReactComponent as ArrowBack } from "../../icons/left-arrow-back.svg";

const Header = () => {
    const numberFavoriteProducts = useSelector(numberFavoriteProductsSelector);
    const numberProductsInCart = useSelector(numberProductsInCartSelector);

    return (
        <header className="header-wrapper">
            <nav>
                <div className="logo">
                    <Link to="/" >
                        <span>MULTI</span>
                        <span>SHOP</span>
                    </Link>
                </div>
                <ul>
                    <li>
                        <NavLink to="/" >
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <div className="dropdown">
                            <button className="drop-btn">Categories</button>
                            <div className="dropdown-content">
                                <Link to="/category/electronics">Electronics</Link>
                                <Link to="/category/jewelery">Jewelery</Link>
                                <Link to="/category/men's%20clothing">Men's clothing</Link>
                                <Link to="/category/women's%20clothing">Women's clothing</Link>
                            </div>
                        </div>
                        <ArrowBack className="dropdown arrow-icon" />
                    </li>
                </ul>
            </nav>
            <div className="icons-wrapper">
                <Link to="/favorites">
                    <StarIcon className="icon"/>
                    <span>{ numberFavoriteProducts }</span>
                </Link>
                <Link to="/shopping-cart">
                    <ShoppingCartIcon className="icon icon-cart" />
                    <span>{ numberProductsInCart }</span>
                </Link>
            </div>
        </header>
    );
}

export default Header;
