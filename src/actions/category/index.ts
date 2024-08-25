"use server";

import { Category } from "@/db/schema/category";

async function getCategories() {
  const categories = await Category.find({}).lean();
  return categories;
}

async function getCategoryDetails(categoryId: string) {
  try {
    const category = await Category.findById(categoryId).lean();
    return category;
  } catch (error) {
    throw new Error(error as string);
  }
}

export { getCategories, getCategoryDetails };
