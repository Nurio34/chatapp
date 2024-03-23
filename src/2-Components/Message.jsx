import { useSelector } from "react-redux";

function Message({ avatar, name, text, uid, createdAt }) {
    const { user } = useSelector((store) => store.auth);

    return (
        <div
            className={`chat ${
                user.displayName === name ? "chat-end" : "chat-start"
            }`}
        >
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt={name} src={avatar} />
                </div>
            </div>
            <div className="chat-header flex gap-2 items-center">
                {name}
                <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble">{text}</div>
            <div className="chat-footer opacity-50">createdAt</div>
        </div>
    );
}

export default Message;
