import {
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import Article from '../models';
import articleType from '../types';

export default {
  description: 'Creates a new article',
  type: articleType,
  args: {
    author: {
      type: new GraphQLNonNull(GraphQLString),
    },
    content: {
      type: new GraphQLNonNull(GraphQLString),
    },
    excerpt: {
      type: new GraphQLNonNull(GraphQLString),
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
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve(root, { author, content, excerpt, published, tags, title }) {
    return Article.create({ author, content, excerpt, published, tags, title });
  },
};
