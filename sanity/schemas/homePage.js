export default {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "headline",
      type: "string",
      title: "Hero Headline",
    },
    {
      name: "subheadline",
      type: "string",
      title: "Hero Subheadline",
    },
    {
      name: "ctaText",
      type: "string",
      title: "CTA Button Text",
    },
    {
      name: "ctaLink",
      type: "string",
      title: "CTA Button Link",
    },
    {
      name: "featuredTitle",
      type: "string",
      title: "Featured Section Title",
    },
    {
      name: "featuredDescription",
      type: "string",
      title: "Featured Section Description",
    },
    {
      name: "offerTitle",
      type: "string",
      title: "What I Offer Title",
    },
    {
      name: "offerDescription",
      type: "string",
      title: "What I Offer Description",
    },
    {
      name: "collaborateTitle",
      type: "string",
      title: "Collaborate Section Title",
    },
    {
      name: "collaborateDescription",
      type: "string",
      title: "Collaborate Section Description",
    },
    {
      name: "collaborateButtonText",
      type: "string",
      title: "Collaborate Button Text",
    },
    {
      name: "services",
      type: "array",
      title: "Services",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Service Title" },
            {
              name: "description",
              type: "string",
              title: "Service Description",
            },
          ],
        },
      ],
    },
  ],
};
