import React from "react";
import { BiSolidStore } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const { cart } = useSelector((state) => state);
	return (
		<div className="bg-slate-900">
			<nav className="flex justify-between items-center h-20 max-w-6xl mx-auto  text-white">
				<NavLink to={`/`}>
					<div className="flex items-center gap-2 ml-5">
						<BiSolidStore className="text-5xl text-emerald-400"></BiSolidStore>
						<p className="text-2xl font-semibold ">SHOPHUB</p>
					</div>
				</NavLink>

				<div className="flex font-medium text-slate-100 items-center mr-6 gap-6">
					<NavLink to={`/`}>
						<p className="text-lg">Home</p>
					</NavLink>
					<NavLink to={`/cart`} className="relative">
						<BsCart4 className="text-2xl"></BsCart4>
						<span className="absolute -top-1 -right-2 bg-emerald-600 rounded-full text-xs w-4 h-4 flex justify-center">{cart.length}</span>
					</NavLink>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
