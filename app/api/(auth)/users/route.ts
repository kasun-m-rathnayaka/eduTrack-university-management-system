import { connect } from "@/lib/db"
import { error } from "console";
import { NextResponse } from "next/server"

export const GET = () =>{
    connect().catch(console.dir);
    return NextResponse.json({ message: "Hello World" });
}