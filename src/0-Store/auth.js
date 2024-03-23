import { createSlice } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

import { auth } from "../firebase";

const initialState = {
    user: {},
    message: "",
    chat: [],
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.user = payload;
        },
        setMessage: (state, { payload }) => {
            state.message = payload;
        },
        setChat: (state, { payload }) => {
            state.chat = payload;
        },
    },
});

const signWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
};

export const signWithGoogleFn = async () => {
    try {
        await signWithGoogle();
    } catch (error) {
        console.log(error);
    }
};

const logout = () => signOut(auth);

export const logoutFn = async () => {
    try {
        console.log("ok");
        await logout();
    } catch (error) {
        console.log(error);
    }
};

export const authReducer = authSlice.reducer;

export const { setUser, setMessage, setChat } = authSlice.actions;
