import mongoose, { Schema, Document, Model } from "mongoose";

export interface ITestimonial extends Document {
  content: string;
  user: mongoose.Types.ObjectId;
  courseId: mongoose.Types.ObjectId;
  rating: number;
}

const testimonialSchema: Schema<ITestimonial> = new Schema({
  content: {
    required: true,
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  courseId: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  rating: {
    required: true,
    type: Number,
  },
});

export const Testimonial: Model<ITestimonial> =
  mongoose.models.Testimonial ??
  mongoose.model<ITestimonial>("Testimonial", testimonialSchema);
