import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

export function Layout() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl flex flex-col mx-auto flex-1 py-16">
        <Outlet />
      </div>
    </>
  );
}
