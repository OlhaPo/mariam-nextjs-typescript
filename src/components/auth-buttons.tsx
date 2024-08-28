"use client";

import { signIn } from "next-auth/react";

export function GoogleSignInButton() {
    const handleClick = () => {
        signIn("google");
    };

    return (
        <button
            onClick={handleClick}
            className="login-google-button"
        >
            Continue with Google
        </button>
    );
}

