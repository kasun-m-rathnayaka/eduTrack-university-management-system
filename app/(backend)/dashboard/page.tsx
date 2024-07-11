"use client";

import React, { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import Students from "../students/page";

const Dashboard = () => {
  const user = useContext(AuthContext);
  console.log(user);
  return (
    <>
      <Students />
    </>
  );
};

export default Dashboard;
