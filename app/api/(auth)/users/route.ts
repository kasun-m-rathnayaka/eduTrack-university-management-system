import { connect } from "@/lib/db"
import User from "@/lib/models/users";
import { NextResponse } from "next/server"

export const GET = async() =>{
    try {
        await connect().catch(console.dir);
        const users = await User.find();
        return new NextResponse(JSON.stringify(users))
    } catch (error:any) {
        return error
    }
}