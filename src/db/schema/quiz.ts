import mongoose, { Schema, Document, Model } from "mongoose";

export interface IQuiz extends Document {
  title: string;
  description?: string;
  explanations?: string;
  slug?: string;
  options?: any[];
  mark: number;
}

const quizzesSchema: Schema<IQuiz> = new Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    type: String,
  },
  explanations: {
    type: String,
  },
  slug: {
    type: String,
  },
  options: {
    type: Array,
  },
  mark: {
    required: true,
    default: 5,
    type: Number,
  },
});

export const Quiz: Model<IQuiz> = mongoose.models.Quiz ?? mongoose.model<IQuiz>("Quiz", quizzesSchema);
