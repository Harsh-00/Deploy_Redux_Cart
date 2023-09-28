import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Spinner from "../comp/Spinner";
import Card from "../comp/Card";

const Home = () => {
	const [load, setLoad] = useState(false);
	const [post, setPost] = useState([]);

	async function ApiCall() {
		setLoad(true);
		try {
			const res = await fetch("https://fakestoreapi.com/products");
			const data = await res.json();
			console.log(data);
			setPost(data);
			// data --> array of object
		} catch (e) {
			alert("API Failed");
			setPost([]);
		}
		setLoad(false);
	}

	useEffect(() => {
		ApiCall();
	}, []);

	console.log(post);
	return (
		<div className="pb-10 ">
			{load ? (
				<div className="flex justify-center items-center h-screen -translate-y-10">
					<Spinner />
				</div>
			) : post.length != 0 ? (
				<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  max-w-6xl p-2 mx-auto space-y-10 space-x-5 ">
					{post.map((ele) => (
						<Card post={ele} key={ele.id}></Card>
					))}
				</div>
			) : (
				<p>No Data Found</p>
			)}
		</div>
	);
};

export default Home;
