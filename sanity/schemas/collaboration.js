export default {
  name: "collaboration",
  title: "Collaboration",
  type: "document",
  fields: [
    { name: "title", type: "string", title: "Title" },
    {
      name: "type",
      type: "string",
      title: "Type",
      options: { list: ["Service", "Past Collab"] },
    },
    { name: "description", type: "text", title: "Description" },
    { name: "image", type: "image", title: "Image" },
    { name: "link", type: "url", title: "External Link (optional)" },
  ],
};
