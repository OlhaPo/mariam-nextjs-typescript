"use client";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  // get session from nextAuth
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/admin/dashboard");
    }
  }, [session]);

  if (!session) {
    return (
      <div className="w-full min-h-screen flex items-center">
        <div className="text-center w-full">
          <button
            onClick={() => signIn("google")}
            type="button"
            className="login-button"
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }
}
