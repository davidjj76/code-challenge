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

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'This is a root mutation',
  fields: () => ({
    createArticle: {
      description: 'creates a new article',
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
        return db.Article.create({ author, content, excerpt, published, tags, title });
      },
    },
    updateArticle: {
      description: 'modify an existing article',
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
        return db.Article.findByIdAndUpdate(id, article);
      },
    },
    deleteArticle: {
      description: 'deletes an article by id',
      type: articleType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(root, { id }) {
        return db.Article.findByIdAndRemove(id);
      },
    },
  }),
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

export default Schema;
