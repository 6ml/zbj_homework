let {
    GraphQLString,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID
} = require('graphql');

const TagType = require('./tagType');

/*
 * type Post {
 *	   id: ID!,
 * 	   name: String!,
 * 	   createDate: String!,
 *     title: String!,
 *     subtitle: String,
 *     content: String,
 *     tags: [Tag]
 * }
 *
 */

const PostType = new({
	name: 'PostType',
	fields: {
		id: {
			type: new GraphQLNonNull(GraphQLID)
		},
		name: {
			type: new GraphQLNonNull(GraphQLString)
		},
		createDate: {
			type: new GraphQLNonNull(GraphQLString)
		},
		title: {
			type: new GraphQLNonNull(GraphQLString)
		},
		subtitle: {
			type: GraphQLString
		},
		content: {
			type: GraphQLString
		},
		tags: {
			type: new GraphQLList(TagType),
			resolve: post => {
				post.tags.map(tagName => {
					return getTagByName(tagName);
				})
			}
		}
	}
});