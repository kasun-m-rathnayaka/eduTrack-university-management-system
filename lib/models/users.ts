import { Schema, model, models } from "mongoose";

const userModel = new Schema(
    {
        email: {type: "string", required: "true", unique: "true"},
        username: {type: "string", required: "true", unique: "true"},
        password: {type: "string", required: "true"},
        isverified: {type: "boolean", default: "false"},
        isAdmin: {type: "boolean", default: "false"},
        fogotPasswordToken: {type: "string", default: "null"},
        fogotPasswordExpire: {type: "Date", default: "null"},
        verifyToken: {type: "string", default: "null"},
    },
    {
        timestamps: true
    }
)

const User = models.User || model("User", userModel)
export default User