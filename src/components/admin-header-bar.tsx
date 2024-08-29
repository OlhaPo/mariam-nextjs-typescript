"use client";

import { useSession } from "next-auth/react";
import { adminPanel } from "@/lib/constants";

export default function AdminHeaderBar() {
  const { data: session } = useSession();

  return (
    <div className="admin-header-bar">
      <h1 className="text-center text-base">
        <span className="text-primary font-semibold text-3xl">
          {adminPanel.brand}
        </span>{" "}
        {adminPanel.panel}
      </h1>
      <div className="inline-flex items-center gap-5">
        {session ? (
          <>
            <h2 className="text-base">
              {adminPanel.loggedAs}<span className="font-semibold pl-2">{session.user.name}</span></h2>
          </>
        ) : (
          <p className="text-base">{adminPanel.notLoggedIn}</p>
        )}
      </div>
    </div>
  );
}
