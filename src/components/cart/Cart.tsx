import "./cart.css";
import { productDisplayImages } from "../../images";

interface Props {
	itemsInCart: number;
	deleteItem: () => void;
}

const Cart = ({ itemsInCart, deleteItem }: Props) => {
	const emptyCart = (
		<div className="checkout empty">
			<p>Your cart is empty.</p>
		</div>
	);

	const notEmptyCart = (
		<div className="checkout">
			<div className="cart_items">
				<img
					id="thumbnail"
					src={productDisplayImages.thumbnailImages[0]}
					alt=""
				/>
				<p>
					Fall Limited Edition Sneakers <br /> $125.00 x {itemsInCart}{" "}
					<span id="total">${125 * itemsInCart}.00</span>
				</p>

				<svg onClick={deleteItem} id="delete-btn" width="14" height="16">
					<path
						d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
						fill="#C3CAD9"
						fillRule="nonzero"
					/>
				</svg>
			</div>

			<button id="checkout-btn">Checkout</button>
		</div>
	);

	return (
		<div className="cart_container">
			<p>Cart</p>
			{itemsInCart === 0 ? emptyCart : notEmptyCart}
		</div>
	);
};

export default Cart;
