import React from "react";
import {useCart} from "react-use-cart";
import Tittle from "../header/tittle/Tittle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
	const {
		isEmpty,
		totalUniqueItems,
		items,
		totalItems,
		cartTotal,
		updateItemQuantity,
		removeItem,
		emptyCart
	} = useCart();
	console.log(totalUniqueItems)

	const sendMessage = () => {
		let msg = [];
		for (let item of items) {
		  let textopedido = ` ${item.product}(${item.quantity})`;
		  msg += textopedido;
		}
		window.open(
		  `https://api.whatsapp.com/send?phone=${"3144695811"}&text=${"Hola quisiera pedir:  "}${msg} precioTotal:${cartTotal}`
		);
	 };

	if (isEmpty) return <h1 className="text-center"></h1>;
	return (
		<section className="py-4 container">
			<div
				className="modal fade   "
				id="staticBackdrop"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabIndex="-1"
				aria-labelledby="staticBackdropLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog ">
					<div className="modal-content bg-dark">
						<div className="modal-header">
							<div className="d-flex align-items-center">
								<img src="/assets/logo 1.png" alt="" />
								<h3>
									<Tittle />
								</h3>
							</div>
							<button
								type="button"
								className="btn-close m-2 bg-white"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body text-white">
							{items.map((item, index) => {
								return (
									<table key={index}>
									<tbody>
									<tr >
										<td>
											<img
												className="imageModal"
												src={item.image}
												style={{ height: "6rem" }}
												alt="image"
											/>
										</td>
										<td className="quantity">{item.quantity}Lb&nbsp;&nbsp;</td>
										<td>{item.product} &nbsp;&nbsp; </td>
										<td>${item.price}</td>
										<td>
											<button
												className="btn btn-warning ms-2 "
												onClick={() =>
													updateItemQuantity(item.id, item.quantity + 1)
												}
											>
												+
											</button>
											<button
												className="btn btn-danger ms-2"
												onClick={() =>
													updateItemQuantity(item.id, item.quantity - 1)
												}
											>
												-
											</button>
											<button
												className="btn btn-warning ms-2"
												onClick={() => removeItem(item.id)}
											>
												<FontAwesomeIcon icon={faTrashCan} />
											</button>
										</td>
									</tr>
									</tbody>
									</table>
								);
							})}
						</div>
						<div className="modal-footer">
							<div className="col-auto ms-auto text-white">
								Precio Total: ${cartTotal}
								<button
									className="btn btn-danger m-2"
									onClick={() => emptyCart()}
									data-bs-dismiss="modal"
								>
									Limpiar
								</button>
								<button
									className="btn btn-danger m-2"
									onClick={sendMessage}
									data-bs-dismiss="modal"								>
									Comprar
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cart;
