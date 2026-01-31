export default {
  name: "mediaKitPage",
  title: "Media Kit Page",
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
      name: "keyMetricsTitle",
      type: "string",
      title: "Key Metrics Title",
    },
    {
      name: "keyMetrics",
      type: "array",
      title: "Key Metrics",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Metric Label" },
            { name: "value", type: "string", title: "Metric Value" },
            {
              name: "change",
              type: "string",
              title: "Change (e.g., +12% YoY)",
            },
          ],
        },
      ],
    },
    {
      name: "platformTitle",
      type: "string",
      title: "Platform Presence Title",
    },
    {
      name: "platforms",
      type: "array",
      title: "Platforms",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string", title: "Platform Name" },
            { name: "handle", type: "string", title: "Handle" },
            { name: "followers", type: "string", title: "Followers" },
            { name: "avgViews", type: "string", title: "Average Views" },
            { name: "category", type: "string", title: "Content Category" },
          ],
        },
      ],
    },
    {
      name: "contentCategoriesTitle",
      type: "string",
      title: "Content Categories Title",
    },
    {
      name: "contentCategories",
      type: "array",
      title: "Content Categories",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string", title: "Category Name" },
            { name: "percentage", type: "number", title: "Percentage" },
            { name: "description", type: "string", title: "Description" },
          ],
        },
      ],
    },
    {
      name: "audienceTitle",
      type: "string",
      title: "Audience Title",
    },
  ],
};
