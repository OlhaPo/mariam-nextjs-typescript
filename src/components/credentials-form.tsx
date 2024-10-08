"use client";

import { adminPanel } from "@/lib/constants";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface CredentialsFormProps {
    csrfToken?: string;
}

export function CredentialsForm(props: CredentialsFormProps) {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        const signInResponse = await signIn("credentials", {
            email: data.get("email"),
            password: data.get("password"),
            redirect: false,
        });

        if (signInResponse?.ok) {
            router.push("/admin/dashboard");
        } else {
            console.log("Error: ", signInResponse);
            setError("Your Email or Password is wrong!");
        }
    };

    return (
        <form
            className="w-full mt-8 text-xl text-black flex flex-col"
            onSubmit={handleSubmit}
        >
            {error && (
                <span className="p-4 mb-2 text-md font-semibold text-white bg-red-500 rounded-md">
                    {error}
                </span>
            )}
            <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md"
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md"
            />

            <button
                type="submit"
                className="login-button"
            >
                {adminPanel.logIn}
            </button>
        </form>
    );
}