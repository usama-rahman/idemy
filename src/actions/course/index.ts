"use server";

import { Category } from "@/db/schema/category";
import { Course } from "@/db/schema/course";
import { Module } from "@/db/schema/module";
import { Testimonial } from "@/db/schema/testimonial";
import { User } from "@/db/schema/user";

const getAllCourse = async () => {
  const courses = await Course.find({ active: true })
    .select(["title", "subtitle", "thumbnail", "modules", "price", "category", "instructor"])
    .populate({
      path: "category",
      model: Category,
    })
    .populate({
      path: "instructor",
      model: User,
    })
    .populate({
      path: "testimonials",
      model: Testimonial,
    })
    .populate({
      path: "modules",
      model: Module,
    })
    .lean();
  return courses;
};

export { getAllCourse };
