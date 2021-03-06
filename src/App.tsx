import React, { useState } from 'react';
import { useQuery } from 'react-query';
//Components
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Item from './components/Item/index';
import Cart from './components/Cart';
import { getAllProducts } from './services/productsService';

import Linearprogress from '@material-ui/core/LinearProgress';
//styles
import { Container, StyledButton } from './App.Styles';
import GlobalStyle from './styles/global';

//Api --> fakestoreapi.com
//types from fakestoreapi.com

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number; //my own property
};

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    async (): Promise<CartItemType[]> => {
      const { data } = await getAllProducts();
      return data;
    },
  );

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((accumulator: number, item) => accumulator + item.amount, 0);

  const handleItemToCart = (selectedItem: CartItemType) => {
    let updatedCart = [];
    //1.Is the item already in the cart ?
    const isItemInCart = cartItems.find(item => item.id === selectedItem.id);
    if (isItemInCart) {
      updatedCart = cartItems.map(item =>
        item.id === selectedItem.id
          ? {
              ...item,
              amount: item.amount + 1,
            }
          : item,
      );
    } else {
      //Add new item with amount=1
      updatedCart = [...cartItems, { ...selectedItem, amount: 1 }];
    }
    setCartItems(updatedCart);
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[]),
    );
  };

  if (isLoading) return <Linearprogress />;
  if (error) return <div>Something went wrong</div>;

  return (
    <>
      <Container>
        <Drawer
          anchor="right"
          open={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        >
          <Cart
            cartItems={cartItems}
            addToCart={handleItemToCart}
            removeFromCart={handleRemoveFromCart}
          />
        </Drawer>
        <StyledButton onClick={() => setIsCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color="primary">
            <AddShoppingCartIcon />
          </Badge>
        </StyledButton>
        <Grid container spacing={3}>
          {data?.map(item => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleItemToCart} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <GlobalStyle />
    </>
  );
};

export default App;
