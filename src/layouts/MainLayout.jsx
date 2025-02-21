import React from "react";
import Nav from "@/components/nav";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default MainLayout;
