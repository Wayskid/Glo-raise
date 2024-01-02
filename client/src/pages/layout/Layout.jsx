import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div>
      <Nav />
      <div className="mt-[93px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
