import {
	GraphQLObjectType,
	GraphQLSchema
} from 'graphql';

import ArticleType from './articleType';

/*
 * queryType{
 *     article: ArticleType
 * }
 *
 */

const queryType = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		article: {
			type: ArticleType,
			resolve: () => ({})
		}
	}
});

const schema = new GraphQLSchema({
	query: queryType
});

export default schema;
