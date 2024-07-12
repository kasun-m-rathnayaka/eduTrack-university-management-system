import { connect } from "@/lib/db"
import ActiveModules from "@/lib/models/activemodules";
import User from "@/lib/models/users";
import { NextResponse } from "next/server";

export const GET = async()=>{
    try {
        await connect().catch(console.dir);
        const activemodules = await ActiveModules.find({stu: "6691145b3dba9effe2c19ea4"});
        return new NextResponse(JSON.stringify(activemodules), { status: 200 });
      } catch (error: any) {
        return new NextResponse("error with featching users " + error, {
          status: 500,
        });
      }
}