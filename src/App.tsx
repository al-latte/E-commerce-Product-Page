import { useState } from "react";
import "./App.css";
import Navigation from "./components/nagivation/Navigation";
import Cart from "./components/cart/Cart";
import ProductDisplay from "./components/productDisplay/ProductDisplay";
import ProductInfo from "./components/productInfo/ProductInfo";
import Lightbox from "./components/lightbox/Lightbox";

function App() {
	const [itemsInCart, setItemsInCart] = useState(0);
	const [numberOfItems, setNumberOfItems] = useState(0);
	const [cartIsOpen, setCartIsOpen] = useState(false);
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const [lightbox, setLightbox] = useState(false);

	const toggleCart = () => {
		setCartIsOpen(!cartIsOpen);
	};

	const toggleMobileMenu = () => {
		setMenuIsOpen(!menuIsOpen);
	};

	const toggleLightbox = () => {
		setLightbox(!lightbox);
	};

	const removeItem = () => {
		if (numberOfItems === 0) {
			setNumberOfItems(0);
		} else {
			setNumberOfItems((numberOfItems) => numberOfItems - 1);
		}
	};

	const addItem = () => {
		setNumberOfItems((numberOfItems) => numberOfItems + 1);
	};

	const addToCart = () => {
		setItemsInCart((itemsInCart) => itemsInCart + numberOfItems);
		setNumberOfItems(0);
	};

	const deleteItem = () => {
		setItemsInCart(0);
	};

	return (
		<div className="App">
			{lightbox && <Lightbox toggleLightbox={toggleLightbox} />}
			<div className="container">
				<Navigation
					menuIsOpen={menuIsOpen}
					toggleMobileMenu={toggleMobileMenu}
					itemsInCart={itemsInCart}
					toggleCart={toggleCart}
				/>
				{cartIsOpen && (
					<Cart itemsInCart={itemsInCart} deleteItem={deleteItem} />
				)}
				<ProductDisplay toggleLightbox={toggleLightbox} />
				<ProductInfo
					addToCart={addToCart}
					numberOfItems={numberOfItems}
					removeItem={removeItem}
					addItem={addItem}
				/>
			</div>
		</div>
	);
}

export default App;
