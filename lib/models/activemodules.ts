import { Schema, model, models } from "mongoose";

const activeModulesModel = new Schema(
    {
        stu: {type: "string", required: true, unique: true},
        modulesList: [
            {
                module: {type: "string", required: true},
                status: {type: "string", required: true},
                grade: {type: "string", required: true},
            }
        ]
    },
    {
        timestamps: true
    }
)

const ActiveModules = models.ActiveModules || model("ActiveModules", activeModulesModel)
export default ActiveModules