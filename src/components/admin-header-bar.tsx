"use client";

import { useSession, signOut } from "next-auth/react";
import { BiLogOut } from "react-icons/bi";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function AdminHeaderBar() {
  const { data: session } = useSession();

  async function logout() {
    await signOut({ callbackUrl: "/admin/login" });
  }

  return (
    <div className="admin-header-bar">
      <h1 className="text-center text-base">
        <span className="text-primary font-semibold text-3xl">
          mariam crochet jewelry
        </span>{" "}
        admin panel
      </h1>
      <div className="inline-flex items-center gap-5">
        {session ? (
          <>
            <h2 className="text-base">
              Logged in as{" "}
            </h2>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button className="outline-none font-semibold">
                  {session?.user?.name}
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  className="min-w-[150px] bg-[#9DACB7] py-5 mr-8 rounded-md"
                  sideOffset={5}
                >
                  <DropdownMenu.Item className="leading-8 flex justify-center items-center outline-none text-lg">
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
          </>
        ) : (
          <p className="text-base">Not logged in</p>
        )}
      </div>
    </div>
  );
}
