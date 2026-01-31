export const showcaseQuery = `*[_type == "showcase"] | order(publishedAt desc){
  _id, title, category, description, "image": image.asset->url, videoUrl
}`;

export const dancePortfolioQuery = `*[_type == "dancePortfolio"] | order(publishedAt desc){
  _id, title, category, description, videoUrl, "thumbnail": thumbnail.asset->url
}`;

export const collaborationQuery = `*[_type == "collaboration"]{
  _id, title, type, description, "image": image.asset->url, link
}`;

export const inquiriesQuery = `*[_type == "inquiry"] | order(submittedAt desc){
  _id,
  name,
  email,
  company,
  collaborationType,
  message,
  submittedAt,
  status
}`;

// Page content queries
