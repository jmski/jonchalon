export default {
  name: "inquiry",
  title: "Collaboration Inquiry",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      type: "string",
      title: "Email",
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: "company",
      type: "string",
      title: "Company/Brand",
      description: "Your company or brand name",
    },
    {
      name: "collaborationType",
      type: "string",
      title: "Collaboration Type",
      options: {
        list: [
          "Sponsored Content",
          "Event Performance",
          "Content Creation",
          "Brand Partnership",
          "Other",
        ],
      },
    },
    {
      name: "message",
      type: "text",
      title: "Message",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "submittedAt",
      type: "datetime",
      title: "Submitted At",
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "status",
      type: "string",
      title: "Status",
      options: {
        list: ["New", "Read", "Replied", "Archived"],
      },
      initialValue: "New",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "collaborationType",
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title,
        subtitle: subtitle || "No type selected",
      };
    },
  },
};
