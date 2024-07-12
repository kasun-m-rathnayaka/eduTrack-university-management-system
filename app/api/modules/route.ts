import { connect } from "@/lib/db"
import Module from "@/lib/models/module";
import User from "@/lib/models/users";
import { NextResponse } from "next/server";

export const GET = async()=>{
    try {
        await connect().catch(console.dir);
        const module = await Module.find();
        return new NextResponse(JSON.stringify(module), { status: 200 });
      } catch (error: any) {
        return new NextResponse("error with featching module " + error, {
          status: 500,
        });
      }
}