'use client'
import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TableComponent from "@/components/ui/TableComponent";
import { AuthContext } from "@/context/AuthContext";

const ActiveModules = () => {
  const [modules, setModules] = useState([]); 
  const user = useContext(AuthContext);
  // console.log(user.user._id)
  const featchData = async () => {
    try {
      const res = await fetch("/api/activemodules", {
        next: { tags: ["modules"] },
      });
      const data = await res.json();
      setModules(data[0].modulesList);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    featchData();
  }, []);
  console.log(modules)
  return (
    <div>
      <Card x-chunk="dashboard-06-chunk-0">
        <CardHeader>
          <CardTitle>Active Modules</CardTitle>
          <CardDescription>
            Manage Modules and analyze their performance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TableComponent activeModules={modules} />
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-10</strong> of <strong>32</strong> Items
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ActiveModules;
