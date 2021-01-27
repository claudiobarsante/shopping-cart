import CartItem from './../CartItem/index';
import { Container } from './styles';
import { CartItemType } from '../../App';

interface Props {
    cartItems : CartItemType[];
    addToCart:(selectedItem:CartItemType) => void;
    removeFromCart:(id:number) => void;
}

const Cart: React.FC<Props> = ({cartItems,addToCart,removeFromCart}) => {
  return (
      <Container>
          <h2>Your Shopping cart</h2>
          {cartItems.length === 0 ? <p>No items in cart</p> : null}
          {cartItems.map(item => (
              <CartItem key={item.id} item={item} addToCart={addToCart} 
              removeFromCart={removeFromCart}/>
          ))}
      </Container>

  );
}


export default Cart;