import { Schema, model, models } from "mongoose";

const consultentModel = new Schema(
    {
        email: {type: "string", required: true, unique: true},
        username: {type: "string", required: true, unique: true},
        password: {type: "string", required: true},
        isverified: {type: "boolean", default: false},
        isAdmin: {type: "boolean", default: false},
    },
    {
        timestamps: true
    }
)

const Consultent = models.Consultent || model("Consultent", consultentModel)
export default Consultent