import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

function CartProvider({ children }) {
	const [cart, setCart] = useState([]);

	return (
		<CartContext.Provider value={{ cart, setCart }}>
			{children}
		</CartContext.Provider>
	);
}

function useCart() {
	const context = useContext(CartContext);
	if (context === undefined)
		throw new Error('Cart Context was used outside the CartProvider');

	return context;
}

export { CartProvider, useCart };
