import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartCard from "../comp/CartCard";
import { NavLink } from "react-router-dom";

const Cart = () => {
	const { cart } = useSelector((state) => state);
	console.log(cart);
	const [totAmount, setTotAmount] = useState(0);

	useEffect(() => {
		setTotAmount(cart.reduce((total, ele) => total + ele.price, 0));
	}, [cart]);

	return (
		<div className="">
			{cart.length != 0 ? (
				<div className="flex max-w-6xl mx-auto gap-10">
					<div className="w-[70%] ml-20">
						{cart.map((ele, idx) => (
							<CartCard data={ele} key={ele.id} />
						))}
					</div>
					<div className="relative w-[40%] flex justify-center">
						<div className="fixed mt-10">
							<p className="text-xl text-green-700 font-semibold">
								Your Cart
							</p>
							<p className="text-5xl font-semibold text-green-700 uppercase mt-3">
								Summary
							</p>
							<p className="mt-16">
								<span>
									<span className="text-lg font-semibold text-gray-700">
										Total items:{" "}
									</span>
									{cart.length}
								</span>
							</p>
							<p className="mt-2">
								<span className="text-lg font-semibold text-gray-700">
									Total Amount:{" "}
									<span className="text-black font-bold text-xl">
										${totAmount.toFixed(2)}
									</span>{" "}
								</span>
							</p>
							<button className="mt-20 bg-emerald-600 w-full py-3 rounded-full font-semibold text-white text-xl">
								Check Out
							</button>
						</div>
					</div>
				</div>
			) : (
				<div className="flex justify-center items-center h-[80vh]">
					<div>
						<p className="text-gray-700 font-semibold text-2xl mb-4 tracking-wide">
							Your Cart is Empty !
						</p>
						<NavLink to={`/`}>
							<button className="bg-green-600 rounded-full py-3 px-16  text-white uppercase font-semibold text-lg">
								Shop Now
							</button>
						</NavLink>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
