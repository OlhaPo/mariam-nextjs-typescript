"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { BiLogOut } from "react-icons/bi";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function AdminHeaderBar() {
  const { data: session } = useSession();

  async function logout() {
    await signOut({ callbackUrl: "/admin/login" });
  }

  return (
    <div>
      <div className="flex justify-end items-center gap-5">
        <h2>
          Logged in as{" "}
          <span className="font-semibold">{session?.user?.name}</span>
        </h2>{" "}
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="inline-flex items-center justify-center outline-none">
              <Image
                src={session?.user?.image ?? ""}
                alt="Admin user"
                width={50}
                height={50}
                className="rounded-full"
              />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="min-w-[150px] bg-primary text-white py-5"
              sideOffset={5}
            >
              <DropdownMenu.Item className="leading-8 flex justify-center items-center outline-none">
                <button
                  onClick={() => logout()}
                  className="inline-flex items-center gap-2"
                >
                  <BiLogOut />
                  Logout
                </button>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </div>
  );
}
