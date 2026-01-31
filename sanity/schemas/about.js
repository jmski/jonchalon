export default {
  name: "about",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "_type",
      type: "string",
      hidden: true,
      initialValue: "about",
    },
    {
      name: "headline",
      type: "string",
      title: "Headline",
      description: "Main headline for the about page",
    },
    {
      name: "tagline",
      type: "string",
      title: "Tagline",
      description: "Short description under headline",
    },
    {
      name: "bio",
      type: "array",
      title: "Full Biography",
      description: "Tell your story in sections",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "heading",
              type: "string",
              title: "Section Heading",
            },
            {
              name: "content",
              type: "text",
              title: "Content",
            },
          ],
        },
      ],
    },
    {
      name: "profileImage",
      type: "image",
      title: "Profile Image",
      description: "Main profile photo",
    },
    {
      name: "philosophy",
      type: "array",
      title: "Philosophy Points",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "principle",
              type: "string",
              title: "Principle",
            },
            {
              name: "description",
              type: "text",
              title: "Description",
            },
          ],
        },
      ],
    },
    {
      name: "expertise",
      type: "array",
      title: "Areas of Expertise",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "category",
              type: "string",
              title: "Category",
              options: {
                list: [
                  "Dance & Movement",
                  "Content Creation",
                  "Hobby Expertise",
                  "Business",
                ],
              },
            },
            {
              name: "skills",
              type: "array",
              title: "Skills",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    },
  ],
};
