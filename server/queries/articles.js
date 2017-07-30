import {
  GraphQLList,
} from 'graphql';

import Article from '../models';
import articleType from '../types/article';

export default {
  description: 'Gets an article list',
  type: new GraphQLList(articleType),
  resolve() {
    return Article.find();
  },
};
