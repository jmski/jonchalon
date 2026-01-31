export default {
  name: "stats",
  title: "Platform Stats",
  type: "document",
  fields: [
    {
      name: "platform",
      type: "string",
      title: "Platform",
      description: "e.g., YouTube, TikTok, Instagram, Twitter",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "followers",
      type: "number",
      title: "Followers/Subscribers",
      description: "Total follower count",
    },
    {
      name: "totalViews",
      type: "number",
      title: "Total Views",
      description: "Cumulative view count across all content",
    },
    {
      name: "avgEngagementRate",
      type: "number",
      title: "Average Engagement Rate (%)",
      description: "Percentage value (e.g., 8.5)",
    },
    {
      name: "monthlyGrowth",
      type: "number",
      title: "Monthly Growth Rate (%)",
      description: "Growth percentage per month",
    },
    {
      name: "profileUrl",
      type: "url",
      title: "Profile URL",
      description: "Link to your profile on this platform",
    },
    {
      name: "updatedAt",
      type: "datetime",
      title: "Last Updated",
      description: "When this data was last updated",
    },
  ],
  preview: {
    select: {
      title: "platform",
      subtitle: "followers",
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title,
        subtitle: `${subtitle ? `${subtitle} followers` : "No data"}`,
      };
    },
  },
};
