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

const Requests= () => {
  const [consultent, setConsultent] = useState([]); 
  const featchData = async () => {
    try {
      const res = await fetch("/api/requests", {
        next: { tags: ["requests"] },
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
          <CardTitle>Requests</CardTitle>
          <CardDescription>
            Manage Requests.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TableComponent requestsData={consultent}/>
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

export default Requests
