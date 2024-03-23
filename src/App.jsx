import { useState } from "react";
import "./App.css";
import Header from "./2-Components/Header";
import Main from "./2-Components/Main";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <Main />
        </>
    );
}

export default App;
