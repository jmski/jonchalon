export default {
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    {
      name: "headline",
      type: "string",
      title: "Page Headline",
    },
    {
      name: "subheadline",
      type: "string",
      title: "Page Subheadline",
    },
    {
      name: "formTitle",
      type: "string",
      title: "Form Section Title",
    },
    {
      name: "contactOptions",
      type: "array",
      title: "Contact Options",
      of: [
        {
          type: "object",
          fields: [
            { name: "icon", type: "string", title: "Icon (emoji)" },
            { name: "title", type: "string", title: "Option Title" },
            { name: "value", type: "string", title: "Contact Value" },
          ],
        },
      ],
    },
    {
      name: "directEmailText",
      type: "string",
      title: "Direct Email Text",
    },
    {
      name: "directEmail",
      type: "string",
      title: "Direct Email Address",
    },
  ],
};
