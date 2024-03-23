import React, { useEffect, useRef, useState } from "react";
import { setChat, setMessage } from "../0-Store/auth";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase";
import {
    addDoc,
    collection,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp,
} from "firebase/firestore";

function SendMessage() {
    const { user, message, chat } = useSelector((s) => s.auth);

    const MessageInput = useRef();
    const Form = useRef();
    const Div = useRef();
    useEffect(() => {
        MessageInput.current.focus();
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
    }, [chat]);

    useEffect(() => {
        if (Form.current && Div.current) {
            const height = Form.current.getBoundingClientRect().height;
            Div.current.style.height = `${height}px`;
        }
    }, []);

    const dispatch = useDispatch();
    const sendMessageFn = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        const { message } = data;

        dispatch(setMessage(message));
        e.currentTarget.reset();

        try {
            const { uid, displayName, photoURL } = user;

            await addDoc(collection(db, "messages"), {
                text: message,
                name: displayName,
                avatar: photoURL,
                createdAt: serverTimestamp(),
                uid,
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const q = query(collection(db, "messages"), orderBy("createdAt"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            dispatch(setChat(messages));
        });
        return unsubscribe;
    }, [message]);

    return (
        <div ref={Div}>
            <form
                className=" bg-gray-700 py-[2vh] px-[4vw] fixed bottom-0 w-screen flex justify-between "
                onSubmit={sendMessageFn}
                ref={Form}
            >
                <input
                    type="text"
                    name="message"
                    id="textInp"
                    className="py-[1vh] px-[4vw] grow rounded-tl-lg rounded-bl-lg"
                    ref={MessageInput}
                />
                <button
                    type="submit"
                    className="bg-green-300 py-[1vh] px-[4vw] rounded-tr-lg rounded-br-lg  "
                >
                    Send
                </button>
            </form>
        </div>
    );
}

export default SendMessage;
