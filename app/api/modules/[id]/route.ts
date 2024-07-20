import { connect } from "@/lib/db";
import Modules from "@/lib/models/module";
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt");

export const DELETE = async (request: Request, { params }: { params: any }) => {
  try {
    const _id = params.id;
    await connect().catch(console.dir);

    const deletedUser = await Modules.findByIdAndDelete(_id);

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

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    await connect().catch(console.dir);

    const { code, name, status, department } = body;
    if (!code || !name || !status || !department) {
      return new NextResponse("invalid request", { status: 400 });
    }

    // check if the user already exists
    const user = await Modules.findOne({ code });
    if (user) {
      return new NextResponse("User already exists", { status: 400 });
    }

    const newUser = new Modules({
      code,
      name,
      status,
      department,
    });

    await newUser.save();

    return new NextResponse(
      JSON.stringify({ message: "new user is created", user: newUser }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse("error with featching users " + error, {
      status: 500,
    });
  }
};
