import mongoose, { Schema, Document, Model } from "mongoose";

export interface IReport extends Document {
  totalCompletedLessons: mongoose.Types.ObjectId[];
  totalCompletedModules: mongoose.Types.ObjectId[];
  course: mongoose.Types.ObjectId;
  student: mongoose.Types.ObjectId;
  quizAssessment: mongoose.Types.ObjectId;
  completion_date?: Date;
}

const reportSchema: Schema<IReport> = new Schema({
  totalCompletedLessons: {
    required: true,
    type: [Schema.Types.ObjectId],
    ref: "Lesson",
  },
  totalCompletedModules: {
    required: true,
    type: [Schema.Types.ObjectId],
    ref: "Module",
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  quizAssessment: {
    type: Schema.Types.ObjectId,
    ref: "Assessment",
    required: true,
  },
  completion_date: {
    required: false,
    type: Date,
  },
});

export const Report: Model<IReport> =
  mongoose.models.Report ?? mongoose.model<IReport>("Report", reportSchema);
