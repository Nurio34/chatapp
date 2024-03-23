import { useDispatch, useSelector } from "react-redux";
import { setUser, signWithGoogleFn } from "../0-Store/auth";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";

function HomePage() {
    const { user } = useSelector((store) => store.auth);

    if (user.displayName) {
        return <Navigate to="/chatapp/chat" />;
    }

    return (
        <section>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md grid gap-[2vh]">
                        <h1 className="text-5xl font-bold ">Hello there 👋</h1>
                        <h2 className="text-3xl font-semibold">
                            Your Ultimate Chat Companion
                        </h2>

                        <p className="py-6">
                            Chatting with friends just got even better with Her
                            by your side. From inside jokes to planning
                            hangouts, Her adds a touch of intelligence and fun
                            to every conversation. Start chatting with Her today
                            and bring your friendships to life like never
                            before.
                        </p>
                        <button
                            className="btn btn-primary"
                            onClick={signWithGoogleFn}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomePage;
