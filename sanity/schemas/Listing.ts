
export default {
  name: 'listing',
  title: 'Listing',
  type: 'document',
  fields: [
    {
        name:"user",
        title:"user",
        type:"string"
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
    // New fields for image gallery
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'reference',
      to: [{ type: 'image' }],
    },
  ],
};
