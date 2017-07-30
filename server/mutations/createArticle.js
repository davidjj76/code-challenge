import {
  GraphQLNonNull,
} from 'graphql';

import Article from '../models';
import articleType from '../types/article';
import articleInputType from '../types/articleInput';

export default {
  description: 'Creates a new article',
  type: articleType,
  args: {
    newArticle: {
      type: new GraphQLNonNull(articleInputType),
    },
  },
  resolve(root, params) {
    const newArticle = {
      ...params.newArticle,
      excerpt: params.newArticle.content.slice(0, 350),
    };
    return Article.create(newArticle);
  },
};
