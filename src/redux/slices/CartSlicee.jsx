import { createSlice } from "@reduxjs/toolkit";

export const CartSlicee = createSlice({
	name: "cart",
	initialState: [],
	reducers: {
		add: (state, action) => {
			//action.payload means the argument that we have send from other files while calling this reducer

			//pushing that value to our array
			state.push(action.payload);
		},
		remove: (state, action) => {
			return state.filter((ele) => ele.id !== action.payload);
		},
	},
});

export const { add, remove } = CartSlicee.actions;
export default CartSlicee.reducer;

//reducer function takes 2 parameters ---> state, action
