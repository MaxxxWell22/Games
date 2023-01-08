import {FiXCircle} from "react-icons/fi";
import { useDispatch } from 'react-redux'
import { deleteItemFromCart } from '../../redux/cart/reducer'
import { GameCover } from '../game-image/game-cover'
import './order-item.css'

const Orderitem = ({ game }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteItemFromCart(game.id));
    }

    return (
        <div className='order-item'>
            <div className='order-item__cover'>
                <GameCover image={game.image} />
            </div>
            <div className='order-item__title'>
                <span>{game.title}</span>
            </div>
            <div className='order-item__price'>
                <span>{game.price}руб.</span>
                <FiXCircle 
                size = {25}
                className = 'cart-item__delete-icon'
                onClick={handleClick}
                />
            </div>
        </div>
    )
}

export { Orderitem }