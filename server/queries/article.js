import {
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

import Article from '../models';
import articleType from '../types/article';

export default {
  description: 'Gets an article by id',
  type: articleType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve(root, { id }) {
    return Article.findById(id);
  },
};
