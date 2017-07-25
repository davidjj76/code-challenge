import {
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

import Article from '../models';
import articleType from '../types';

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
