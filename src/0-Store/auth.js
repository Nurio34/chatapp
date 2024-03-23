import { createSlice } from "@reduxjs/toolkit";

import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithRedirect,
} from "firebase/auth";

import { auth } from "../firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const provider = new GoogleAuthProvider();

const initialState = {
    user: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signWithGoogle: (state) => {
            const provider = new GoogleAuthProvider();
            signInWithRedirect(auth, provider);
        },
        setUser: (state, { payload }) => {
            state.user = payload;
        },
    },
});
// const dispatch = useDispatch();

export const authReducer = authSlice.reducer;

export const { signWithGoogle, setUser } = authSlice.actions;
