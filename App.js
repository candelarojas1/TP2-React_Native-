import React, { useState } from 'react';
import { initialCartItems } from './src/data/mockProducts';
import ShoppingCartScreen from './src/screens/ShoppingCartScreen';
import SecurePaymentScreen from './src/screens/SecurePaymentScreen';

export default function App() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [currentScreen, setCurrentScreen] = useState('cart'); // 'cart' | 'payment'

  if (currentScreen === 'payment') {
    return (
      <SecurePaymentScreen
        cartItems={cartItems}
        onBackToCart={() => setCurrentScreen('cart')}
      />
    );
  }

  return (
    <ShoppingCartScreen
      cartItems={cartItems}
      setCartItems={setCartItems}
      onNextScreen={() => setCurrentScreen('payment')}
    />
  );
}
