let {
    GraphQLString,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID
} = require('graphql');

const PostType = require('./postType');

/*
 * type Tag {
 *     id: ID!,
 *     name: String!,
 *     label: String!,
 *     createDate: String!,
 *     posts: [Post]
 * }
 *     
 */

const TagType = new GraphQLObjectType({
	name: 'TagType',
	fields: {
		id: {
			type: new GraphQLNonNull(GraphQLID)
		},
		name: {
			type: new GraphQLNonNull(GraphQLString)
		},
		label: {
			type: new GraphQLNonNull(GraphQLString)
		},
		createDate: {
			type: new GraphQLNonNull(GraphQLString)
		},
		posts: {
			type: new GraphQLList(PostType),
			resolve: tag => {
				getPostsList().filter(post => {
					return post.tags.indexOf(tag.name);
				})
			}
		}
	}
});