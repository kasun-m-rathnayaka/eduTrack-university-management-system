import { Schema, model, models } from "mongoose";

const activeModulesModel = new Schema(
    {
        email: {type: "string", required: true, unique: true},
        username: {type: "string", required: true, unique: true},
        password: {type: "string", required: true},
        isverified: {type: "boolean", default: false},
        isAdmin: {type: "boolean", default: false},
        fogotPasswordToken: {type: "string", default: null},
        fogotPasswordExpire: {type: "Date", default: null},
        verifyToken: {type: "string", default: null},
        due:{type: "number", default: 0}
    },
    {
        timestamps: true
    }
)

const ActiveModules = models.ActiveModules || model("User", activeModulesModel)
export default ActiveModules