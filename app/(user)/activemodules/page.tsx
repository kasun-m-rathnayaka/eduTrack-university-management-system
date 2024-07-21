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
import ModuleUi from "@/components/ModuleUi";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import SecondaryHeader from "@/components/SecondaryHeader";

const ActiveModules = () => {
  const [modules, setModules] = useState([]); 
  const [open, setOpen] = useState(false); 
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
  const handleUserInsert = async (user: any) => {
    console.log(user);
    try {
      const response = await axios.post("/api/modules", user);
      toast.success("Module Successfully Created ! ");
      setOpen(false);
    } catch (error: any) {
      console.log({ "sign up failed": error });
      toast.error("Module Creation Failed ! ");
    }
  };

  const handleDelete = async (item: any) => {
    try {
      await axios.delete(`/api/modules/` + item._id);
      toast.success("Module Successfully Deleted!");
    } catch (error: any) {
      console.log({ "delete failed": error });
      toast.error("Module Deletion Failed!");
    }
  };

  const callHandleSubmit = () => {
    setOpen(true);
  };
  
  return (
    <div>
      {open && (
        <ModuleUi setOpen={setOpen} handleUserInsert={handleUserInsert} />
      )}
      <Toaster />
      <SecondaryHeader callHandleSubmit={callHandleSubmit} />
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
