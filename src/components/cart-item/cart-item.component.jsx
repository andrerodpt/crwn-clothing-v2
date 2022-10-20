import { CartItemContainer, ItemDetails } from './cart-item.styles';

const CartItem = ({cartItem}) => {
    const {name, price, imageUrl, quantity} = cartItem;

    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <span>{name}</span>
                <span>{quantity} x {price} EUR</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;