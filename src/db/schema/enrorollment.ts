import mongoose, { Schema, Document, Model } from "mongoose";

export interface IEnrollment extends Document {
  enrollment_date: Date;
  status: string;
  completion_date?: Date;
  method: string;
  course: mongoose.Types.ObjectId;
  student: mongoose.Types.ObjectId;
}

const enrollmentSchema: Schema<IEnrollment> = new Schema({
  enrollment_date: {
    required: true,
    type: Date,
  },
  status: {
    required: true,
    type: String,
  },
  completion_date: {
    required: false,
    type: Date,
  },
  method: {
    required: true,
    type: String,
  },
  course: { type: Schema.Types.ObjectId, ref: "Course" },
  student: { type: Schema.Types.ObjectId, ref: "User" },
});

export const Enrollment: Model<IEnrollment> =
  mongoose.models.Enrollment ?? mongoose.model<IEnrollment>("Enrollment", enrollmentSchema);
