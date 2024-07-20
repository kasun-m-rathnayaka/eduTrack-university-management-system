import { connect } from "@/lib/db";
import User from "@/lib/models/users";
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt");

export const GET = async () => {
  try {
    await connect().catch(console.dir);
    const users = await User.find();
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error: any) {
    return new NextResponse("error with featching users " + error, {
      status: 500,
    });
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    await connect().catch(console.dir);

    const { email, username, password } = body;
    if (!email || !username || !password) {
      return new NextResponse("invalid request", { status: 400 });
    }

    // check if the user already exists
    const user = await User.findOne({ email });
    if (user) {
      return new NextResponse("User already exists", { status: 400 });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
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
