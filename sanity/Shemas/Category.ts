import { defineConfig, defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Category",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
