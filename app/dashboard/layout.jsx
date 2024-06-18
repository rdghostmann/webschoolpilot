import DashboardNavBar from "../ui/dashboard/DashboardNavBar/DashboardNavBar";
import DashboardSideBar from "../ui/dashboard/DashboardSideBar/DashboardSideBar";
import SideNav from "../ui/dashboard/SideNav/SideNav";

import { getServerSession } from "next-auth";
import AuthProvider from "../../utils/SessionProvider";
import { redirect } from "next/navigation";

export default async function Layout({ children }) {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }
  return (
    // <div className="flex h-screen">
    <div className="grid min-h-screen w-full lg:grid-cols-[180px_1fr]">
      {/* <SideNav /> */}
      <DashboardSideBar />

      {/* <main className="ml-20 w-full "> */}
      <main className="flex flex-col gap-4 lg:gap-6">
        <DashboardNavBar />
        <div className="mt-16">
          <AuthProvider session={session}>
            {children}
          </AuthProvider>
        </div>
      </main>
    </div >
  );
};