import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlicee";
import { MdDelete } from "react-icons/md";

const CartCard = ({ data }) => {
	const dis = useDispatch();

	function RemoveHandler() {
		dis(remove(data.id));
		toast.error("Item Removed");
	}

	return (
		<div>
			<div className="flex gap-8 items-center mt-8">
				<img src={data.image} className="w-40" />

				<div className="">
					<h1 className="text-gray-700 font-semibold text-xl mb-4">
						{data.title}
					</h1>
					<p className="font-normal text-[16px] mb-4">
						{data.description.slice(0, 135) + "..."}
					</p>
					<div className="flex justify-between items-center mt-8">
						<p className="text-green-600 font-semibold text-xl">
							${data.price}
						</p>
						<button
							onClick={RemoveHandler}
							className="mr-10 bg-red-200 h-8 w-8 flex justify-center items-center rounded-full"
						>
							<MdDelete className="text-xl   "></MdDelete>
						</button>
					</div>
				</div>
			</div>
			<div className="my-8 w-full h-[2px] bg-gray-500"></div>
		</div>
	);
};

export default CartCard;
