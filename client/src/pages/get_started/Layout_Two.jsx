import React from "react";
import { Outlet } from "react-router-dom";
import Nav_Two from "./Nav_Two";

export default function Layout_Two() {
  return (
    <div>
      <Nav_Two />
      <div className="mt-[93px]">
        <Outlet />
      </div>
    </div>
  );
}
