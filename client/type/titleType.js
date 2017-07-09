import {
	GraphQLObjectType,
	GraphQLString,
} from 'graphql';

/*
 * type Title{
 *     authorId: String,
 *     title: String,
 *     url: String
 * }
 *
 */

const Title = new GraphQLObjectType({
	name: 'TitleType',
	fields: {
		authorId: {
			type: GraphQLString
		},
		title: {
			type: GraphQLString
		},
		url: {
			type: GraphQLString
		}
	}
});

export default Title;
