import {
	GraphQLObjectType,
	GraphQLSchema
} from 'graphql';

import NewsType from './newsType';

/*
 * queryType{
 *     news: NewsType
 * }
 *
 */

const queryType = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		news: {
			type: NewsType,
			resolve: () => ({})
		}
	}
});

const schema = new GraphQLSchema({
	query: queryType
});

export default schema;
