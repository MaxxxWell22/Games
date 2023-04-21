import { FiXCircle } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setCurrentGame } from "../../../redux/games/games";
import { deleteItemFromCart } from '../../../redux/cart/reducer';
import './order-item.scss'

const OrderItem = ({ game }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = () => {
        dispatch(deleteItemFromCart(game.id));
    }

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(setCurrentGame(game));
        navigate(`/app/${game.title}`);
    };

    return (
        <div className='order-item'>
            <div style={{ display: 'flex' }}>
                <div className='order-item__cover' onClick={handleClick}>
                    <img src={game.image} />
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
                        onClick={handleDelete}
                    />
                </div>
            </div>
        </div>
    );
};

export { OrderItem }