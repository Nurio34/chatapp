import React from "react";
import { useSelector } from "react-redux";
import Message from "./Message";

function Messages() {
    const { chat } = useSelector((store) => store.auth);

    return (
        <div>
            {chat.map((message) => {
                return <Message key={message.id} {...message} />;
            })}
        </div>
    );
}

export default Messages;
