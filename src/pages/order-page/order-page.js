import { useSelector } from 'react-redux';
import { calcTotalPrice } from '../../components/Header/utils';
import { OrderItem } from '../../components/items-in-cart/order-item/order-item';

const OrderPage = () => {
    const items = useSelector(state => state.cart.itemsInCart);

    if (items.length < 1) {
        return (
            <h1>Ваша корзина пуста</h1>
        );
    };

    return (
        <div className='order-page'>
            <div className='order-page__left'>
                {items.map((game) => <OrderItem key={game.id} game={game} />)}
            </div>
            <div className='order-page__right'>
                <div className='order-page__total-price'>
                    <span style={{marginBottom: '20px', fontSize: ''}}>
                        {items.length} товаров на сумму {calcTotalPrice(items)} руб.
                    </span>
                </div>
            </div>
        </div>
    );
};

export { OrderPage }