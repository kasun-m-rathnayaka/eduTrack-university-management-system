'use client'
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TableComponent from "@/components/ui/TableComponent";

const ActiveModules = () => {
  const [modules, setModules] = useState([]); 
  const featchData = async () => {
    try {
      const res = await fetch("/api/activemodules", {
        next: { tags: ["modules"] },
      });
      const data = await res.json();
      setModules(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    featchData();
  }, []);
  
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
