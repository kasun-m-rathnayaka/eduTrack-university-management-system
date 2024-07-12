import { connect } from "@/lib/db"
import Modules from "@/lib/models/module";
import { NextResponse } from "next/server";

export const GET = async()=>{
    try {
        await connect().catch(console.dir);
        const modules = await Modules.find();
        return new NextResponse(JSON.stringify(modules), { status: 200 });
      } catch (error: any) {
        return new NextResponse("error with featching module " + error, {
          status: 500,
        });
      }
}