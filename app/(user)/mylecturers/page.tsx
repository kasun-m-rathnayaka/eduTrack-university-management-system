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

const Lectures = () => {
  const [consultent, setConsultent] = useState([]); 
   const featchData = async () => {
    try {
      const res = await fetch("/api/lecturers", {
        next: { tags: ["lecturers"] },
      });
      const data = await res.json();
      setConsultent(data);
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
          <CardTitle>Lecturers</CardTitle>
          <CardDescription>
            Assigned Lectures for each modules.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TableComponent lectuerData={consultent} />
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

export default Lectures;
