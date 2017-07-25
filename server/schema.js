import {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
} from 'graphql';
import db from './db';

const articleType = new GraphQLObjectType({
  name: 'Article',
  description: 'This represents a Article',
  fields: () => ({
    author: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    excerpt: {
      type: GraphQLString,
    },
    id: {
      type: GraphQLString,
    },
    published: {
      type: GraphQLBoolean,
    },
    tags: {
      type: new GraphQLList(GraphQLString),
    },
    title: {
      type: GraphQLString,
    },
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => ({
    article: {
      description: 'gets an article by id',
      type: articleType,
      args: {
        id: {
          name: 'id',
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(root, { id }) {
        return db.Article.findById(id);
      },
    },
    articles: {
      description: 'gets an articles list',
      type: new GraphQLList(articleType),
      resolve() {
        return db.Article.find();
      },
    },
  }),
});

const Schema = new GraphQLSchema({
  query: Query,
});

export default Schema;
