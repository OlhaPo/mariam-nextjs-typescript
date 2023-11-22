"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  // get session from nextAuth
  const { data: session } = useSession();
  // useSession uses React Context

  // if the user exists -> show a Sign Out button and their information
  if (session) {
    return (
      <>
        <button
          onClick={() => signOut()}
          type="button"
          className="login-button"
        >
          Sign Out of Google
        </button>
      </>
    );
  } else {
    return (
      <div className="w-full h-screen flex items-center">
        <div className="text-center w-full">
          <button
            onClick={() => signIn()}
            type="button"
            className="login-button"
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }

  // if a user doesn't exist -> show a Sign In button
}
