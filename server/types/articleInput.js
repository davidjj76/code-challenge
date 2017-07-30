import {
  GraphQLBoolean,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'ArticleInput',
  description: 'This represents an Input Article',
  fields: () => ({
    author: {
      type: new GraphQLNonNull(GraphQLString),
    },
    content: {
      type: new GraphQLNonNull(GraphQLString),
    },
    published: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    tags: {
      type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});
