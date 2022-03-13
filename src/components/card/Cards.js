import React from "react";
import Card from "./Card";
import "./Cards.css";

const cards = [
	{
		id: 1,
		title: "Res",
		image: "./assets/res.jpg"
	},
	{
		id: 2,
		title: "Pollo",
		image: "./assets/pollo.jpg"
	},
	{
		id: 3,
		title: "Cerdo",
		image: "./assets/cerdo.jpg"
	},
	{
		id: 4,
		title: "Pescado",
		image: "./assets/pez.jpg"
	},
	{
		id: 5,
		title: "Quesos",
		image: "./assets/quesos.png"
	},
	{
		id: 6,
		title: "Embutidos",
		image: "./assets/embutidos.jpg"
	}
];

function Cards() {
	return (
		<div className="container d-flex card-container justify-content-between my-5 ">
			<div className="row">
				<h2 className="d-flex  justify-content-center titleShop h1">
					Tienda en Linea
				</h2>
				<h1 className="d-flex  justify-content-center titleProducts my-3">
					{" "}
					<b> Nuestros productos</b>
				</h1>
				{cards.map((card) => (
					<div className="col-md-4 " key={card.id}>
						<Card title={card.title} image={card.image} />
					</div>
				))}
			</div>
		</div>
	);
}

export default Cards;
