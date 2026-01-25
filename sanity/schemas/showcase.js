export default {
  name: "showcase",
  title: "Showcase",
  type: "document",
  fields: [
    { name: "title", type: "string", title: "Title" },
    {
      name: "category",
      type: "string",
      title: "Category",
      options: { list: ["Gunpla", "Pokémon"] },
    },
    { name: "description", type: "text", title: "Description" },
    { name: "image", type: "image", title: "Image" },
    { name: "videoUrl", type: "url", title: "Video URL (optional)" },
    { name: "publishedAt", type: "datetime", title: "Published At" },
  ],
};
