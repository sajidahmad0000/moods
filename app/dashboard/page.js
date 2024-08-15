import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";
import Main from "@/components/Main";

export const metadata = {
  title: "Moods ⋅ Dashboard",
  description: "Track your daily mood every day of the year!",
};

export default function dashBoardPage() {
  const isAuthenticated = false;

  let children = <Login />;
  if (isAuthenticated) {
    children = <Dashboard />;
  }
  return <Main>{children}</Main>;
}
