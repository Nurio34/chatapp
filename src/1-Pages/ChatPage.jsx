import React from "react";
import { useSelector } from "react-redux";

function ChatPage() {
    const { user } = useSelector((store) => store.auth);

    return <section>Welcome {user}</section>;
}

export default ChatPage;
