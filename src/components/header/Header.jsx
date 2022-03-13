import React from "react";
import "./Header.css";
import Tittle from "./tittle/Tittle";


function Header() {
	return (
		<div>
			<div className="header ">
				<img
					src="https://smartdemowp.com/carneshop/wp-content/uploads/2020/06/banner-1.jpg"
					className="img-fluid img-bg "
					alt=""
				/>
				<div className=" about text-white m-4  head">
					<h3 className="lema">Districarnes</h3>
					<h5 className="tittle">
						<Tittle />
					</h5>
					<p>
						Tenemos el privilegio de cuidar nuestro producto desde su origen,
						obteniendo una carne saludable de magnifico sabor.
					</p>

					<h3 className="lema">Calidad y buen Servicio</h3>
				</div>
			</div>
		</div>
	);
}
export default Header;
