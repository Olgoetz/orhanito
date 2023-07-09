import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_API_TOKEN,
});

// Retrieve the list of blog posts from Contentful
const getEvents = async () => {
  const response = await client.getEntries({
    content_type: "event",
  });

  return response.items;
};

export default getEvents;
