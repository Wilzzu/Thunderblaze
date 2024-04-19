import { configureStore, createSlice } from "@reduxjs/toolkit";

const loggedUser = createSlice({
	name: "loggedUser",
	initialState: { user: {} },
	reducers: {
		addUserInfo: (state, action) => {
			state.user = action.payload;
		},
		removeUserInfo: (state) => {
			state.user = {};
		},
	},
});

const demoUser = createSlice({
	name: "demoUser",
	initialState: { user: {} },
	reducers: {
		addDemoUser: (state, action) => {
			state.user = action.payload;
		},
		removeDemoUser: (state) => {
			state.user = {};
		},
	},
});

export const { addUserInfo, removeUserInfo } = loggedUser.actions;
export const { addDemoUser, removeDemoUser } = demoUser.actions;

export const store = configureStore({
	reducer: {
		loggedUser: loggedUser.reducer,
		demoUser: demoUser.reducer,
	},
});
