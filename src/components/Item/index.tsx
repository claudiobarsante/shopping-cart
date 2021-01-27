import Button from '@material-ui/core/Button';
import { CartItemType } from '../../App';
import { Container, Title, Description, Price } from './styles';
import formatValue from './../../utils/formatValue';

interface Props {
  item: CartItemType;
  handleAddToCart: (selectedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <Container>
      <img src={item.image} alt={item.title} />
      <div>
        <Title>{item.title}</Title>
        <Description>{item.description}</Description>
        <Price>{formatValue(item.price)}</Price>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </Container>
  );
};

export default Item;
