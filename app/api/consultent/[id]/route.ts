import { connect } from "@/lib/db";
import Councel from "@/lib/models/assignedConsultent";
import Lecturer from "@/lib/models/lecturers";
import { NextResponse } from "next/server";

export const DELETE = async (request: Request, { params }: { params: any }) => {
  try {
    const _id = params.id;
    await connect().catch(console.dir);

    const deletedUser = await Councel.findByIdAndDelete(_id);

    if (!deletedUser) {
      return new NextResponse("User not found", { status: 404 });
    }

    return new NextResponse(
      JSON.stringify({
        message: "User deleted successfully",
        user: deletedUser,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse("Error deleting user: " + error, { status: 500 });
  }
};
