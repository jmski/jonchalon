export default {
  name: "dancePortfolio",
  title: "Dance Portfolio",
  type: "document",
  fields: [
    { name: "title", type: "string", title: "Title" },
    {
      name: "category",
      type: "string",
      title: "Category",
      options: { list: ["Choreography", "Freestyle", "Performance"] },
    },
    { name: "description", type: "text", title: "Description" },
    { name: "videoUrl", type: "url", title: "Video URL" },
    { name: "thumbnail", type: "image", title: "Thumbnail" },
    { name: "publishedAt", type: "datetime", title: "Published At" },
  ],
};
