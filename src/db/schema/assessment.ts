import mongoose, { Document, Model, Schema } from "mongoose";

export interface IAssessment extends Document {
  assessments: string[];
  otherMarks: number;
}

const assessmentSchema: Schema<IAssessment> = new Schema({
  assessments: {
    required: true,
    type: [String],
  },
  otherMarks: {
    required: true,
    type: Number,
  },
});

export const Assessment: Model<IAssessment> =
  mongoose.models.Assessment ??
  mongoose.model<IAssessment>("Assessment", assessmentSchema);
