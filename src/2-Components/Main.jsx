import { Route, Routes } from "react-router-dom";
import HomePage from "../1-Pages/HomePage";
import ChatPage from "../1-Pages/ChatPage";
import PrivateRoute from "../3-Routes/PrivateRoute";

function Main() {
    return (
        <main>
            <Routes>
                <Route path="/chatapp" element={<HomePage />} />
                <Route
                    path="/chatapp/chat"
                    element={
                        <PrivateRoute>
                            <ChatPage />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </main>
    );
}

export default Main;
