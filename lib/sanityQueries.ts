export const showcaseQuery = `*[_type == "showcase"] | order(publishedAt desc){
  _id, title, category, description, "image": image.asset->url, videoUrl
}`;

export const dancePortfolioQuery = `*[_type == "dancePortfolio"] | order(publishedAt desc){
  _id, title, category, description, videoUrl, "thumbnail": thumbnail.asset->url
}`;

export const collaborationQuery = `*[_type == "collaboration"]{
  _id, title, type, description, "image": image.asset->url, link
}`;

export const mediaKitQuery = `*[_type == "mediaKit"]{statName, value, platform}`;

export const aboutQuery = `*[_type == "about"][0]{bio, "image": image.asset->url}`;

export const contactQuery = `*[_type == "contact"][0]{email, social}`;
