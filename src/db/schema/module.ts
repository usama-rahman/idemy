import mongoose, { Schema, Document } from "mongoose";

interface IModule extends Document {
  title: string;
  description?: string;
  active: boolean;
  slug: string;
  course: mongoose.Types.ObjectId;
  lessonIds: mongoose.Types.ObjectId[];
  order: number;
}

const moduleSchema = new Schema<IModule>({
  title: {
    required: true,
    type: String,
  },
  description: {
    type: String,
  },
  active: {
    required: true,
    default: false,
    type: Boolean,
  },
  slug: {
    required: true,
    type: String,
  },
  course: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: "Course",
  },
  lessonIds: [{ type: Schema.Types.ObjectId, ref: "Lesson" }],
  order: {
    required: true,
    type: Number,
  },
});

export const Module = mongoose.models.Module ?? mongoose.model<IModule>("Module", moduleSchema);
