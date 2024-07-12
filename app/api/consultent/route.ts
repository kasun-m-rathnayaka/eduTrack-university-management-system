import { connect } from "@/lib/db";
import AssignedConsultent from "@/lib/models/assignedConsultent";
import User from "@/lib/models/users";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connect().catch(console.dir);
    const assignedConsultent = await AssignedConsultent.find({
      stu: "6691145b3dba9effe2c19ea4",
    });
    return new NextResponse(JSON.stringify(assignedConsultent), {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse("error with featching users " + error, {
      status: 500,
    });
  }
};
