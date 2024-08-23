import mongoose, { Schema, Document, Model } from "mongoose";

export interface IQuizset extends Document {
  title: string;
  description?: string;
  slug?: string;
  quizIds: mongoose.Types.ObjectId[];
  active: boolean;
}

const quizesetSchema: Schema<IQuizset> = new Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    type: String,
  },
  slug: {
    type: String,
  },
  quizIds: [
    {
      type: Schema.Types.ObjectId,
      ref: "Quiz",
    },
  ],
  active: {
    required: true,
    default: false,
    type: Boolean,
  },
});

export const Quizset: Model<IQuizset> =
  mongoose.models.Quizset ??
  mongoose.model<IQuizset>("Quizset", quizesetSchema);
