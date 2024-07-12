import { Schema, model, models } from "mongoose";

const activeModulesModel = new Schema(
  {
    stu: { type: "string", required: true, unique: false },
    consultentList: [
      {
        consultent: { type: "string", required: true },
        status: { type: "string", required: true },
        phnumber: { type: "string", required: true },
        email: { type: "string", required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const AssignedConsultent =
  models.AssignedConsultent || model("assignedconsultent", activeModulesModel);
export default AssignedConsultent;
