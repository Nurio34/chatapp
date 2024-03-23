import { useEffect, useState } from "react";
import "./App.css";
import Header from "./2-Components/Header";
import Main from "./2-Components/Main";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { setUser } from "./0-Store/auth";
import { onAuthStateChanged } from "firebase/auth";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            const User = {
                ...user,
                proactiveRefresh: null,
                auth: null,
                stsTokenManager: null,
                metadata: null,
            };
            dispatch(setUser(User));
        });
        return unsubscribe;
    });

    return (
        <>
            <Header />
            <Main />
        </>
    );
}

export default App;
