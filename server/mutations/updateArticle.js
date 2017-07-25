import {
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import Article from '../models';
import articleType from '../types';

export default {
  description: 'Updates an article by id',
  type: articleType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    author: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    excerpt: {
      type: GraphQLString,
    },
    published: {
      type: GraphQLBoolean,
      defaultValue: true,
    },
    tags: {
      type: new GraphQLList(GraphQLString),
      defaultValue: [],
    },
    title: {
      type: GraphQLString,
    },
  },
  resolve(root, { id, ...article }) {
    return Article.findByIdAndUpdate(id, article);
  },
};
