import React from "react";
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
  return (
    <div>
      <Card x-chunk="dashboard-06-chunk-0">
        <CardHeader>
          <CardTitle>Lecturers</CardTitle>
          <CardDescription>
            Manage Lectures and analyze their performance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TableComponent />
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
