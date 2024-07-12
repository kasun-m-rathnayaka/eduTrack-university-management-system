import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal, UserCheck, UserCircleIcon } from "lucide-react";
import Moment from "react-moment";

const defaultHeadings = [
  "Code",
  "Subject Name",
  "Status",
  "Department",
  "Modified At",
];

const TableComponent = ({
  data,
  moduleData,
  consultentData,
  lectuerData,
  requestsData,
  activeModules,
  consultent,
}: {
  data?: any;
  moduleData?: any;
  consultentData?: any;
  lectuerData?: any;
  requestsData?: any;
  activeModules?: any;
  consultent?: any;
}) => {
  return (
    <>
      <Table>
        <TableHeader>
          {lectuerData && (
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead className="md:table-cell">Name</TableHead>
              <TableHead className="md:table-cell">Email</TableHead>
              <TableHead className="hidden md:table-cell">Is Admin</TableHead>
              <TableHead className="hidden md:table-cell">
                Major Subject
              </TableHead>
              <TableHead className="hidden md:table-cell">
                Joined Date
              </TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          )}
          {consultentData && (
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead className="md:table-cell">Name</TableHead>
              <TableHead className="md:table-cell">Email</TableHead>
              <TableHead className="hidden md:table-cell">Is Verified</TableHead>
              <TableHead className="hidden md:table-cell">
                Is Admin
              </TableHead>
              <TableHead className="hidden md:table-cell">
                Joined Date
              </TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          )}
          {data && (
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead className="md:table-cell">Name</TableHead>
              <TableHead className="md:table-cell">Email</TableHead>
              <TableHead className="hidden md:table-cell">
                Is Verified
              </TableHead>
              <TableHead className="hidden md:table-cell">Due Fees</TableHead>
              <TableHead className="hidden md:table-cell">
                Joined Date
              </TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          )}
          {activeModules && (
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead className="md:table-cell">Module</TableHead>
              <TableHead className="md:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">
                Grade
              </TableHead>
              <TableHead className="hidden md:table-cell">
                Date
              </TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          )}
          {moduleData && (
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead className="md:table-cell">Code</TableHead>
              <TableHead className="md:table-cell">Subject Name</TableHead>
              <TableHead className="hidden md:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Department</TableHead>
              <TableHead className="hidden md:table-cell">
                Modified Date
              </TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          )}
          {consultent && (
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead className="md:table-cell">Name</TableHead>
              <TableHead className="md:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Email</TableHead>
              <TableHead className="hidden md:table-cell">Phone Num</TableHead>
              <TableHead className="hidden md:table-cell">
                Modified Date
              </TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          )}
        </TableHeader>
        <TableBody>
          {/* map student data */}
          {data &&
            data.map((item: any, index: number) => (
              <TableRow key={index}>
                <TableCell className="hidden sm:table-cell">
                  <UserCircleIcon />
                </TableCell>
                <TableCell className="font-medium">{item.username}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell className="hidden md:table-cell">
                  <Badge variant="outline">{(item.isverified).toString()}</Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {item.due}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <Moment date={item.createdAt} />
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
          {/* map module data */}
          {moduleData &&
            moduleData.map((item: any, index: number) => (
              <TableRow key={index}>
                <TableCell className="hidden sm:table-cell">
                  <UserCircleIcon />
                </TableCell>
                <TableCell className="font-medium">{item.code}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell className="hidden md:table-cell">
                  <Badge variant="outline">{item.status}</Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {item.department}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <Moment date={item.modifiedAt} />
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
          {consultentData &&
            consultentData.map((item: any, index: number) => (
              <TableRow key={index}>
                <TableCell className="hidden sm:table-cell">
                  <UserCircleIcon />
                </TableCell>
                <TableCell className="font-medium">{item.username}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {item.email}
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{(item.isverified).toString()}</Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {(item.isAdmin).toString()}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <Moment date={item.createdAt} />
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
          {lectuerData &&
            lectuerData.map((item: any, index: number) => (
              <TableRow key={index}>
                <TableCell className="hidden sm:table-cell">
                  <UserCircleIcon />
                </TableCell>
                <TableCell className="font-medium">{item.username}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell className="hidden md:table-cell">
                  <Badge variant="outline">{(item.isAdmin).toString()}</Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {item.majorsub}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <Moment date={item.createdAt} />
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
          {requestsData &&
            requestsData.map((item: any, index: number) => (
              <TableRow key={index}>
                <TableCell className="hidden sm:table-cell">
                  <UserCircleIcon />
                </TableCell>
                <TableCell className="font-medium">{item.username}</TableCell>
                <TableCell>
                  <Badge variant="outline">Draft</Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {item.email}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {item.due}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <Moment date={item.createdAt} />
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
          {activeModules &&
            activeModules.map((item: any, index: number) => (
              <TableRow key={index}>
                <TableCell className="hidden sm:table-cell">
                  <UserCircleIcon />
                </TableCell>
                <TableCell className="font-medium">{item.module}</TableCell>
                <TableCell>
                  {item.status}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                <Badge variant="outline">{item.grade}</Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <Moment date={item.createdAt} />
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
          {consultent &&
            consultent.map((item: any, index: number) => (
              <TableRow key={index}>
                <TableCell className="hidden sm:table-cell">
                  <UserCircleIcon />
                </TableCell>
                <TableCell className="font-medium">{item.consultent}</TableCell>
                <TableCell>
                  <Badge variant="outline">{item.status}</Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <a href={`tel:${item.phnumber}`}>{item.phnumber}</a>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                <a href={`mailto:${item.email}`}>{item.email}</a>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <Moment date={item.modifiedAtAt} />
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
