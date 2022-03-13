import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
	return (
		<div>
			<footer className="site-footer contact  bg-nav " id="contact">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-6 ">
							<h6>Acerca de Nosotros</h6>
							<p className="text-justify">
								Somos una empresa líder en el mercado de comercialización y
								distribución de productos cárnicos en la región del Guavio,
								cumpliendo con sus expectativas de calidad y servicio a través
								del mejoramiento continuo en nuestros procesos operativos y de
								comercialización, promoviendo el desarrollo integral humano y la
								protección del medio ambiente.
							</p>
						</div>

						<div className="col-xs-6 col-md-3">
							<h6>Visitanos en:</h6>
							<p>Calle 6°a N°4-79 Gachetá Cundinamarca</p>
						</div>
						<div className="col-xs-6 col-md-3">
							<h6>Atención:</h6>
							<p>Domingo a domingo 7:00am a 9:00pm</p>
							<div className="d-flex">
								<i className="fab fa-whatsapp h2"></i>{" "}
								<p className="h4">310-752-28-13</p>
							</div>
						</div>
					</div>
				</div>
				<div className="container ">
					<div className="row">
						<div className="col-md-8 col-sm-6 col-xs-12 ">
						<img src="data:image/jpeg;base64,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" width="100rem" alt="Logo" />
						</div>

						<div className="col-md-4 col-sm-6 col-xs-12">
							<ul className="social-icons">
								<li>
									<Link className="facebook" to="/">
										<i className="fab fa-facebook facebook"></i>
									</Link>
								</li>
								<li>
									<Link className="dribbble" to="/">
										<i className="fab fa-twitter"></i>
									</Link>
								</li>
								<li>
									<Link className="linkedin" to="/">
										<i className="fab fa-linkedin"></i>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
export default Footer;
