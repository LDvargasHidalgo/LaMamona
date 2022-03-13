import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function card({ title, image }) {
	return (
		<div className="boxPrin my-4">
			<div className="box   ">
				<h2 className="d-flex justify-content-center category-product ">
					{title}
				</h2>
				<div className="card">
					<div className="imgBx">
						<img src={image} alt="" />
					</div>
					<div className="details">
						<Link
							to="/gallery/"
							className="btn btn-outline-danger p-2  watch btn-lg  button-whatch "
						>
							Ver más
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
export default card;
