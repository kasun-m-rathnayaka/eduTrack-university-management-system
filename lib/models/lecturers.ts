import { Schema, model, models } from "mongoose";

const lectureModel = new Schema(
    {
        email: {type: "string", required: true, unique: true},
        username: {type: "string", required: true, unique: true},
        password: {type: "string", required: true},
        isverified: {type: "boolean", default: false},
        isAdmin: {type: "boolean", default: true},
        majorsub:{type: "string", required: true},
        joineddate:{type: "date", required: true},
    },
    {
        timestamps: true
    }
)

const Lecturer = models.Lecturer || model("Lecturer", lectureModel)
export default Lecturer