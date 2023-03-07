import { FiXCircle } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { deleteItemFromCart } from '../../../redux/cart/reducer';
import './order-item.css';

const OrderItem = ({ game }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteItemFromCart(game.id));
    }

    return (
        <div className='order-item'>
            <div style={{ display: 'flex' }}>
                <div className='order-item__cover'>
                    <img style={{
                        width: 'calc(200px + 9 * (100vw/1900))',
                        height: 'calc(100px + 9 * (100vw/1900))',
                        borderTopLeftRadius: '15px',
                        borderTopRightRadius: '15px'
                    }} className='imageCart' src={game.image} />
                </div>
                <div className='order-item__title'>
                    <span style={{ fontSize: 'calc(15px + 9 * (100vw/1900))' }}>{game.title}</span>
                </div>
            </div>
            <div style={{ marginLeft: '15px' }}>
                <div className='order-item__price'>
                    <span>{game.price}руб.</span>
                    <FiXCircle
                        size={25}
                        className='cart-item__delete-icon'
                        onClick={handleClick}
                    />
                </div>
            </div>
        </div>
    );
};

export { OrderItem }