import { Link } from 'react-router-dom';
import { CartBlock } from '../cart-item/cart-block/cart-block';
import './header.css';

export const Header = () => {
    return (
        <div className="header">
            <div className="wrapper">
                <Link to="/" className="header__store-title">
                    Game Store
                </Link>
            </div>
            <div className="header__cart-btn-wrapper">
                <CartBlock />
            </div>
        </div>
    );
};