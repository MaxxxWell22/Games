import './cart-item.scss'

export const CartItem = ({ title, price }) => {
    return (
        <div className="cart-item">
            <span>{title}</span>
            <div className="cart-item__price">
                <span style={{color: '#F9F54B'}}>{price} руб.</span>
            </div>
        </div>
    );
};
