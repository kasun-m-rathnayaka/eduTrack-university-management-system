import { connect } from "@/lib/db"
import Consultent from "@/lib/models/consultent";
import User from "@/lib/models/users";
import { NextResponse } from "next/server";

export const GET = async()=>{
    try {
        await connect().catch(console.dir);
        const consultent = await Consultent.find();
        return new NextResponse(JSON.stringify(consultent), { status: 200 });
      } catch (error: any) {
        return new NextResponse("error with featching users " + error, {
          status: 500,
        });
      }
}