import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "./ItemCard";
import data from "../tabProduct/data";

const Home = () => {
	const [items, setItems] = useState(data.productData);
	const { category } = useParams();
	const filterItem = (categItem) => {
		const updatedItems = data.productData.filter((curElem) => {
			return curElem.category === categItem;
		});
		setItems(updatedItems);
	};
	useEffect(() => {
		filterItem(category);
	}, [category]);

	return (
		<div>
			<h1 className="text-center mt-3">All Items</h1>
			<section className="py-4 container">
				<div className="row justify-content-center">
					{data.product}
					{items.map((item, index) => {
						
						return (
							<ItemCard
								image={item.image}
								product={item.product}
								price={item.price}
								item={item}
								key={index}
							/>
						);
					})}
			
				</div>
			</section>
		</div>
	);
};

export default Home;
