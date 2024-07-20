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
import SecondaryHeader from "@/components/SecondaryHeader";
import InputUi from "@/components/InputUi";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Students = () => {
  const [students, setStudents] = useState([]); // [students, setStudents
  const [open, setOpen] = useState(false);
  const featchData = async () => {
    try {
      const res = await fetch("/api/students", {
        next: { tags: ["students"] },
      });
      const data = await res.json();
      setStudents(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    featchData();
  }, []);

  const callHandleSubmit = () => {
    setOpen(true);
  };

  const handleUserInsert = async (user: any) => {
    console.log(user);
    try {
      const response = await axios.post("/api/students", user);
      toast.success("User Successfully Created ! ");
      setOpen(false);
    } catch (error: any) {
      console.log({ "sign up failed": error });
      toast.error("User Creation Failed ! ");
    }
  };

  const handleDelete = async (item: any) => {
    try {
      await axios.delete(`/api/students/` + item._id);
      toast.success("Student Successfully Deleted!");
    } catch (error: any) {
      console.log({ "delete failed": error });
      toast.error("Student Deletion Failed!");
    }
  };

  return (
    <div>
      {open && (
        <InputUi setOpen={setOpen} handleUserInsert={handleUserInsert} />
      )}
      <Toaster />
      <SecondaryHeader callHandleSubmit={callHandleSubmit} />
      <Card x-chunk="dashboard-06-chunk-0">
        <CardHeader>
          <CardTitle>Students</CardTitle>
          <CardDescription>
            Manage Students and analyze their performance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TableComponent data={students} handleDelete={handleDelete} />
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

export default Students;
