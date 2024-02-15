"use client";
import userState from "@/state/users";
import { useState } from "react";
import { ServerActionResponse } from "@/types/app/index";
import Link from "next/link";
import { LoggedInUser } from "@/types/users";

export function DashboardPannel({
  session,
}: {
  session: ServerActionResponse | undefined;
}) {
  userState.setUser(session?.data?.user as LoggedInUser);

  const user = userState.state();

  return (
    <div className="w-full p-4 bg-white border flex flex-col justify-start lg:w-2/5 text-gray-600">
      <span className="border-b">
        Welcome back {user.fullName.toLocaleUpperCase()}
      </span>
      <Link
        className="flex justify-center rounded w-full text-white bg-primary hover:bg-gray-700 transition duration-100 p-2"
        href={"/inside/dashboard/add"}
      >
        Add New listing
      </Link>
      <span>Total listings: {user.listings?.length || 0}</span>
    </div>
  );
}

export default DashboardPannel;
