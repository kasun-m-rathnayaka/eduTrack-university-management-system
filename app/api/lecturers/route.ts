import { connect } from "@/lib/db"
import Lecturer from "@/lib/models/lecturers";
import { NextResponse } from "next/server";

export const GET = async()=>{
    try {
        await connect().catch(console.dir);
        const lecturers = await Lecturer.find();
        return new NextResponse(JSON.stringify(lecturers), { status: 200 });
      } catch (error: any) {
        return new NextResponse("error with featching users " + error, {
          status: 500,
        });
      }
}