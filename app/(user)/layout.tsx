import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import Header from "@/components/Header";
  import SideBar from "@/components/SideBar";
  import SecondaryHeader from "@/components/SecondaryHeader";
  import { Tabs, TabsContent } from "@radix-ui/react-tabs";
  import TableComponent from "@/components/ui/TableComponent";
import UserSideBar from "@/components/UserSideBar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <UserSideBar />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <Header title={"Welcome Student"} />
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <Tabs defaultValue="all">
            {/* <SecondaryHeader /> */}
              {children}
            </Tabs>
          </main>
        </div>
      </div>
    </section>
  );
}
