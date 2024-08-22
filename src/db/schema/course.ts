import mongoose, { Document, Model, Schema } from "mongoose";

export interface ICourse extends Document {
  title: string;
  subtitle?: string;
  description: string;
  thumbnail?: string;
  modules: mongoose.Types.ObjectId[];
  price: number;
  active: boolean;
  category: mongoose.Types.ObjectId;
  instructor: mongoose.Types.ObjectId;
  quizSet: mongoose.Types.ObjectId;
  testimonials: mongoose.Types.ObjectId[];
  learning: string[];
  createdOn: Date;
  modifiedOn: Date;
}

const courseSchema: Schema<ICourse> = new Schema({
  title: {
    required: true,
    type: String,
  },
  subtitle: {
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  thumbnail: {
    type: String,
  },
  modules: [{ type: Schema.ObjectId, ref: "Module" }],

  price: {
    required: true,
    default: 0,
    type: Number,
  },
  active: {
    required: true,
    default: false,
    type: Boolean,
  },
  category: { type: Schema.ObjectId, ref: "Category" },
  instructor: { type: Schema.ObjectId, ref: "User" },
  quizSet: { type: Schema.ObjectId, ref: "Quizset" },
  testimonials: [{ type: Schema.ObjectId, ref: "Testimonial" }],
  learning: {
    type: [String],
  },
  createdOn: {
    required: true,
    default: Date.now(),
    type: Date,
  },
  modifiedOn: {
    required: true,
    default: Date.now(),
    type: Date,
  },
});

export const Course: Model<ICourse> =
  mongoose.models.Course ?? mongoose.model<ICourse>("Course", courseSchema);
