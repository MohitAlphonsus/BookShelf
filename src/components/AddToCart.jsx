import { useState } from 'react';

import './AddToCart.scss';

function AddToCart() {
	const [count, setCount] = useState(0);

	function countIncrementHandler() {
		setCount(prevCount => prevCount + 1);
	}

	function countDecrementHandler() {
		if (count === 0) return;
		setCount(prevCount => prevCount - 1);
	}

	return (
		<div className="addtocart__container">
			<div className="quantity">
				<p className="quantity__text">Quantity :</p>
				<div className="quantity__buttons">
					<button onClick={countDecrementHandler}>-</button>
					<span>{count}</span>
					<button onClick={countIncrementHandler}>+</button>
				</div>
			</div>
			<button
				className={`addtocart__button ${count === 0 ? 'disable' : ''}`}
				disabled={count === 0}
			>
				Add To Cart
			</button>
		</div>
	);
}

export default AddToCart;
