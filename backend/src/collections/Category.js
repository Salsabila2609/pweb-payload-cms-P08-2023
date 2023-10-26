/** @type {import('payload/types').CollectionConfig} */
const Category = {
    slug : "Category",
    access : {
      read : () => true,
      update : () => true,
      delete : () => true,
      create : () => true
    },
    fields : [
      {
        name: "title",
        type: "text",
        required: true,
      },
      {
        name: 'date',
        type: 'date',
        admin: {
          date: {
              pickerAppearance: 'dayOnly',
              displayFormat: 'd MMM yyy',
          },
        },
      },
    ]
  }
  
  export default Category