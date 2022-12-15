import PropTypes from 'prop-types';
import { Link, NavLink } from "react-router-dom";

import { ReactComponent as StarIcon } from "../../icons/star.svg";
import { ReactComponent as ShoppingCartIcon } from "../../icons/shopping-cart.svg";

import "./Header.scss"

const Header = ({ numberFavoriteProducts, numberProductsInCart }) => (
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
                    <NavLink to="/about" >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/help" >
                        Help
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/faq" >
                        FAQs
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" >
                        Contact
                    </NavLink>
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

Header.propTypes = {
    numberProductsInCart: PropTypes.number,
    numberProductsLike: PropTypes.number,
};

export default Header;
