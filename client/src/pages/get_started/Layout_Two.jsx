import React from "react";
import { Outlet } from "react-router-dom";
import Nav_Two from "./Nav_Two";
import Footer_Two from "./Footer_Two";

export default function Layout_Two() {
  return (
    <div className="h-full">
      <Nav_Two />
      <div className="mt-[93px]">
        <Outlet />
      </div>
      <Footer_Two />
    </div>
  );
}
