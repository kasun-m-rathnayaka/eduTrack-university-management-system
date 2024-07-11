import { connect } from "@/lib/db";
import User from "@/lib/models/users";
import { NextRequest, NextResponse } from "next/server";
const bcrypt = require("bcrypt");
// import { Jwt } from "jsonwebtoken";

export const POST = async (request: NextRequest) => {
  try {
    await connect().catch(console.dir);
    const reqBody = await request.json();
    const { email, password } = reqBody;

    // chack user exist
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "user does not exist" },
        { status: 400 }
      );
    }

    // check password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { error: "password incorrect" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { user: user },
      { status: 200 }
    );

    // create token data

    //   const tokenData = {
    //     id: user._id,
    //     username: user.username,
    //     email: user.email,
    //   };
    //   const token = await jwt.sign(tokenData, process.env.JWT_KEY);

    //   const response = NextResponse.json({
    //     message: "Login successful",
    //     success: true,
    //   });

    //   response.cookies.set("token", token, {
    //     httpOnly: true,
    //   });
    //   return response;

    //   return NextResponse.json({ token });
  } catch (error: any) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
