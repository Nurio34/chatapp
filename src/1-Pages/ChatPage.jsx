import React from "react";
import { useSelector } from "react-redux";
import { db } from "../firebase";
import Messages from "../2-Components/Messages";
import SendMessage from "../2-Components/SendMessage";

function ChatPage() {
    return (
        <section>
            <Messages />
            <SendMessage />
        </section>
    );
}

export default ChatPage;
