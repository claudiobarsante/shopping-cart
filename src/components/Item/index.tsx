import Button from '@material-ui/core/Button';
import { CartItemType } from '../../App';
import { Container } from './styles';
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
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h3>{formatValue(item.price)}</h3>
            </div>
            <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
        </Container>

    );
}


export default Item;