/** @type {import('payload/types').CollectionConfig} */
const Todo = {
  slug: "Todo",
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "deadline",
      type: "text",
      required: true,
    },   
    {
      name: "Category",
      type: "relationship", 
      relationTo: "Category", 
      hasMany: false,
    },
    {
      name: "status",
      type: "text",
    },  
  ]
};

export default Todo;
