import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import{ ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
 


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item])
	};

	const removeItem = ID =>{
		setCart([...cart.filter(item =>
			ID !== item.id
		)])
	}

	return (
		<div className="App">
			<ProductContext.Provider value={{products, addItem}} >
			<CartContext.Provider value={{ cart, removeItem} }>
				<Navigation cart={cart} />

				{/* Routes */}
				<Route exact path="/">
					<Products />
				</Route>

				<Route path="/cart">
					<ShoppingCart cart={cart} />
				</Route>
			</CartContext.Provider  >
			</ProductContext.Provider>
		</div>		
	);
}

export default App;
