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
      name: "priority",
      type: "select", // Menambahkan field priority
      options: ["Low", "Medium", "High"], // Menyediakan opsi priority
      required: true,
    }
  ]
};

export default Todo;
