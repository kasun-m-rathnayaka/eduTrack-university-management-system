import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreHorizontal, UserCheck, UserCircleIcon } from "lucide-react";
import Moment from 'react-moment';

const TableComponent = ({data}:{data:any}) => {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="hidden w-[100px] sm:table-cell">
              <span className="sr-only">Image</span>
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="hidden md:table-cell">email</TableHead>
            <TableHead className="hidden md:table-cell">Deu Payment</TableHead>
            <TableHead className="hidden md:table-cell">Created at</TableHead>
            <TableHead>
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data && data.map((item: any, index: number) => (
            <TableRow key={index}>
              <TableCell className="hidden sm:table-cell">
                <UserCircleIcon />
              </TableCell>
              <TableCell className="font-medium">
                {item.username}
              </TableCell>
              <TableCell>
                <Badge variant="outline">Draft</Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">{item.email}</TableCell>
              <TableCell className="hidden md:table-cell">25</TableCell>
              <TableCell className="hidden md:table-cell">
                <Moment date={item.createdAt}/>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TableComponent;
