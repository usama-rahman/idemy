import mongoose, { Schema, Document, Model } from "mongoose";

export interface ICategory extends Document {
  title: string;
  description?: string;
  thumbnail: string;
}

const categorySchema: Schema<ICategory> = new Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: false,
    type: String,
  },
  thumbnail: {
    required: true,
    type: String,
  },
});

export const Category: Model<ICategory> =
  mongoose.models.Category ?? mongoose.model<ICategory>("Category", categorySchema);
