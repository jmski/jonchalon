export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "navLinks",
      type: "array",
      title: "Navigation Links",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Link Label" },
            { name: "href", type: "string", title: "Link URL" },
          ],
        },
      ],
    },
    {
      name: "siteName",
      type: "string",
      title: "Site Name (Logo)",
    },
    {
      name: "primaryEmail",
      type: "string",
      title: "Primary Email",
    },
    {
      name: "youtubeHandle",
      type: "string",
      title: "YouTube Handle",
    },
    {
      name: "instagramHandle",
      type: "string",
      title: "Instagram Handle",
    },
  ],
};
