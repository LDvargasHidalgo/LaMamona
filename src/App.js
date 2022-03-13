import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Products from "./pages/Products";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
			<Navbar/>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/gallery" element={<Products />}>
						<Route path=":category" element={<Products />} />
					</Route>
				</Routes>
				<Footer/>
			</BrowserRouter>
		</div>
	);
}

export default App;
