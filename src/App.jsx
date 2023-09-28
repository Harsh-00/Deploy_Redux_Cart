import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./comp/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</div>
	);
}

export default App;
