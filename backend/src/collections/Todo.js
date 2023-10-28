import payload from 'payload'
/** @type {import('payload/types').CollectionConfig} */
const Todo = {
  slug: "Todo",
  admin : {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },

  hooks: {
        afterOperation: [
            async (args) => {
                if (args.operation == "create") {
                    payload.create({
                        collection: "log",
                        data: {
                            collectionName: "todo",
                            action : "create",
                            timestamp: new Date(),
                            Todo: args.result.id
                        },
                    });
                } else if (args.operation == "update") {
                    payload.create({
                        collection: "log",
                        data: {
                            collectionName: "todo",
                            action : "update",
                            timestamp: new Date(),
                            Todo: args.result.id
                        },
                    });
                } else if (args.operation == "delete") {
                    payload.create({
                        collection: "log",
                        data: {
                            collectionName: "todo",
                            action : "delete",
                            timestamp: new Date(),
                            Todo: args.result.id
                        },
                    });
                } else if (args.operation == "findByID") {
                  payload.create({
                      collection: "log",
                      data: {
                          collectionName: "todo",
                          action : "read",
                          timestamp: new Date(),
                          Todo: args.result.id
                      },
                  });
              } 
            },
        ],
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
      type: "select",
      options: [
        { label: "Nothing", value: "1" },
        { label: "On Progress", value: "2" },
        { label: "Finished", value: "3" },
      ],
      required: true,
    },
  ],
};

export default Todo;
