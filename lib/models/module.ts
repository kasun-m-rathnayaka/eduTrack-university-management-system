import { Schema, model, models } from "mongoose";

const moduleModel = new Schema(
    {
        code: {type: "string", required: true, unique: true},
        name: {type: "string", required: true, unique: true},
        status: {type: "string", required: true},
        department: {type: "string", default: 'Computer Science'},
    },
    {
        timestamps: true
    }
)

const Modules = models.Modules || model("Modules", moduleModel)
export default Modules