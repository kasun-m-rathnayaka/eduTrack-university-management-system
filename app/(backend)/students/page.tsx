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

const Students = () => {
  const [students, setStudents] = useState([]); // [students, setStudents
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
  return (
    <div>
      <Card x-chunk="dashboard-06-chunk-0">
        <CardHeader>
          <CardTitle>Students</CardTitle>
          <CardDescription>
            Manage Students and analyze their performance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TableComponent data={students} />
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
