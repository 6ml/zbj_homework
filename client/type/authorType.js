import {
	GraphQLObjectType,
	GraphQLString,
} from 'graphql';

/*
 * Author {
 *     id: String,
 *     name: String
 * }
 *
 */

const Author = new GraphQLObjectType({
	name: 'AuthorType',
	fields: {
		id: {
			type: GraphQLString
		},
		name: {
			type: GraphQLString
		}
	}
});

export default Author;
