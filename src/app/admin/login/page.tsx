import { CredentialsForm } from "@/components/credentials-form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authConfig } from "../../../../lib/auth";
import mariamLogo from "../../../../public/images/mariam-logo.svg";
import Image from "next/image";


export default async function Login() {
  const session = await getServerSession(authConfig);

  if (session) {
    redirect("/admin/dashboard");
  }

  return (
    <div className="w-full flex flex-col items-center justify-center py-2">
      <div className="flex flex-col items-center mt-10 p-10">
        <Image
          src={mariamLogo}
          alt="mariam logo"
          height={64}
          width={64}
          priority
          className="mt-10 mb-4"
        />
        <CredentialsForm />
      </div>
    </div>
  );
}
