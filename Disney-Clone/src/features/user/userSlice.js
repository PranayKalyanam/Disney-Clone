//This will go to Header.jsx
// And will go to Store.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    photo: "",

};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },

        setSignOutSate: (state) => {
            state.name = null;
            state.email = null;
            state.photo = null;

        },
    },
});

export const {setUserLoginDetails, setSignOutSate} = userSlice.actions;

export const selectUserName = (state) => state.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.photo;

export default userSlice.reducer