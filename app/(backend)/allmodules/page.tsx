"use client";
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
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import ModuleUi from "@/components/ModuleUi";
import SecondaryHeader from "@/components/SecondaryHeader";

const AllModules = () => {
  const [modules, setModules] = useState([]);
  const [open, setOpen] = useState(false);
  const featchData = async () => {
    try {
      const res = await fetch("/api/modules", {
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

  const handleDelete = async (item: any) => {
    try {
      await axios.delete(`/api/modules/` + item._id);
      toast.success("Module Successfully Deleted!");
    } catch (error: any) {
      console.log({ "delete failed": error });
      toast.error("Module Deletion Failed!");
    }
  };

  return (
    <div>
      <Card x-chunk="dashboard-06-chunk-0">
        <CardHeader>
          <CardTitle>All Moduless</CardTitle>
          <CardDescription>
            Manage AllModules and analyze their performance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TableComponent moduleData={modules} handleDelete={handleDelete} />
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

export default AllModules;
