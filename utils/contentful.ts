import * as contentful from 'contentful'

export const contentfulClient = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: process.env.CONTENTFUL_SPACE_ID as string,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: process.env.CONTENTFUL_API_TOKEN as string,
  })
  // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token


export type Event = {
  contentTypeId: 'event',
  fields: {
    title: contentful.EntryFieldTypes.Text,
    img: contentful.EntryFieldTypes.Object
    date: contentful.EntryFieldTypes.Date,
    address: contentful.EntryFieldTypes.Text

  }
}