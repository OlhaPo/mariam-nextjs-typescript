import { GoogleSignInButton } from "@/components/auth-buttons";
import { CredentialsForm } from "@/components/credentials-form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authConfig } from "../../../../lib/auth";


export default async function Login() {
  const session = await getServerSession(authConfig);

  if (session) {
    redirect("/admin/dashboard");
  }

  return (
    <div className="w-full flex flex-col items-center justify-centerpy-2">
      <div className="flex flex-col items-center mt-10 p-10">
        <h1 className="mt-10 mb-4 text-3xl">Sign In</h1>
        <GoogleSignInButton />
        <span className="text-xl text-center mt-8">
          Or
        </span>
        <CredentialsForm />
      </div>
    </div>
  );
}
