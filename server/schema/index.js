import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';
import queries from '../queries';
import mutations from '../mutations';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: 'Article queries',
    fields: queries,
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    description: 'Article mutations',
    fields: mutations,
  }),
});
