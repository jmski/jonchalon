export default {
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    { name: "email", type: "string", title: "Email" },
    {
      name: "social",
      type: "array",
      title: "Social Media",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", type: "string", title: "Platform" },
            { name: "handle", type: "string", title: "Handle" },
            { name: "url", type: "url", title: "URL" },
          ],
        },
      ],
    },
  ],
};
