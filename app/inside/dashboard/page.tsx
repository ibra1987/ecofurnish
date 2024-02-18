import ErrorBoundary from "./error";
import UserDashboard from "./dashboardComponents/UserDashboardComponent";

export default async function page() {
  return (
    <main className="w-full flex min-h-screen ">
      <div className="w-full">
        <UserDashboard />
      </div>
    </main>
  );
}
