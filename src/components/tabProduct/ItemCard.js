import React from "react";
import { useCart } from "react-use-cart";
import "./Style.css";

const ItemCard = (props) => {
	const { addItem } = useCart();
	return (
		<div className="col-11 col-md-6 col-lg-3 mx-0 mb-4 pt-5 ">
			<div className="card p-0 overflow-hidden h-100 shadow">
				<h5 className="card-title text-center mt-2 nameProduct">
					{props.product}
				</h5>
				<div className="imageContainer d-flex  justify-content-center">
					<img
						src={props.image}
						className="card-img-top img-fluid  d-flex image "
						alt="imagen"
					/>
				</div>
				<div className="card-body d-flex flex-column justify-content-md-center">
					<p className="card-text text-center">$ {props.price}</p>
					<button
						className="btn btn-outline-danger  "
						onClick={() => addItem(props.item)}
					>
						Comprar
					</button>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
