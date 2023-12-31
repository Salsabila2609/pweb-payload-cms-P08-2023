/** @type {import('payload/types').CollectionConfig} */
const log = {
  slug: "log",
  access: {
    create: () => true,
    read: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "collectionName",
      type: "text",
      required: true,
    },
    {
      name: "action",
      type: "text",
      required: true,
    },
    {
      name: "timestamp",
      type: "date",
      required: true,
    },
    {
      name: "Todo",
      type: "relationship",
      relationTo: "Todo",
    },
    {
      name: "Category",
      type: "relationship",
      relationTo: "Category",
    },
  ],
};

export default log;
