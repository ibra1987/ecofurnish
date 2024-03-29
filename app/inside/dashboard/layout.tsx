import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { fetchUser } from "@/lib/fetch"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import DashboardPannel from "./dashboardComponents/DashboardPannel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  const sessId = cookies().get("sessId")
  if(!sessId) redirect("/users/login")
const session = await fetchUser(sessId.value as string)
if(!session.success) redirect("/users/login")

  return (
 
<>
<Toaster
          position="top-center"
          toastOptions={{
            style: {
              color: "white",
              backgroundColor: "red",
            },
          }}
        />

        <main className="w-full lg:w-10/12 p-4   mx-auto  flex   justify-center items-start space-x-4 my-6 ">
            <DashboardPannel session={session} />
            
                {children}
        </main>
     
</>
     
  );
}
