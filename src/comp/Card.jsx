import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlicee";

const Card = ({ post }) => {
	const { cart } = useSelector((state) => state);
	const dis = useDispatch();

	function AddHandler() {
		dis(add(post));
		toast.success("Item Added to Cart");
	}
	function RemoveHandler() {
		dis(remove(post.id));
		toast.error("Item Removed");
	}
	console.log(cart);
	return (
		<div className="flex flex-col justify-between items-center hover:scale-110 transition-all duration-300 ease-in shadow-lg hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] gap-3 p-4 mt-10 ml-5 rounded-xl border-2">
			<h2 className="text-gray-700 font-semibold text-lg truncate w-40 mt-1">
				{post.title}
			</h2>
			<p className="w-40 text-gray-400 font-normal text-[13px]">
				{post.description.slice(0, 40) + "..."}
			</p>
			<img src={post.image} className="h-[180px]"></img>
			<div className="w-full flex justify-between items-center mt-5">
				<p className="text-green-600 font-semibold text-lg">
					${post.price}
				</p>

				{/* my try  */}

				{/* {cart.map((ele) => {
					ele.id == post.id ? (
						<button>Remove from cart</button>
					) : (
						<button>Add to cart</button>
					);
				})} */}

				{/* ------------------------ */}

				{/* sir try */}

				{/* .some --> return true or false and execute the callback function for every single element of array */}
				{cart.some((ele) => ele.id == post.id) ? (
					<button
						onClick={RemoveHandler}
						className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] uppercase py-1 px-3 hover:bg-red-500 hover:text-white transition-all duration-300"
					>
						Remove Item
					</button>
				) : (
					<button
						onClick={AddHandler}
						className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] uppercase py-1 px-3 hover:bg-green-600 hover:text-white transition-all duration-300"
					>
						Add to cart
					</button>
				)}
			</div>
		</div>
	);
};

export default Card;
