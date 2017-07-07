let {
    GraphQLString,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID
} = require('graphql');

let express = require('express');

let graphQLHTTP = require('express-graphql');

const TagType = require('./tagType');
const PostType = require('./postType');

/*
 * type Blog {
 *     post: Post,
 *     posts: [Post],
 *     tag: Tag,
 *     tags: [Tag]
 * }    
 */

const BlogType = new GraphQLObjectType({
	name: 'BlogType',
	fields: {
		post: {
			type: PostType,
			args: {
				name: {
					type: GraphQLString
				}
			},
			resolve: (blog, { name }) => {
				return getPostByName(name);
			}
		},
		posts: {
			type: new GraphQLList(PostType),
			resolve: () => {
				return getPostsList();
			}
		},
		tag: {
			type: TagType,
			args: {
				name: {
					type: GraphQLString
				}
			},
			resolve: (blog, { name }) => {
				return getTagByName(name);
			}
		},
		tags: {
			type: TagType,
			resolve: () => {
				return getTagsList();
			}
		}
	}
});

const WorldType = {
	type: GraphQLString,
	resolve() {
		return 'world';
	}
};

const queryType = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		hello: WorldType,
		blog: {
			type: BlogType,
			resolve: () => {
				return ({})
			}
		}
	}
});

const schema = new GraphQLSchema({
	query: queryType
});

const app = express();

app
	.use('/graphql', graphQLHTTP({ schema, pretty: true}))
	.listen(3000, () => {
		console.log('GraphQL server is running at http://172.0.0.1:3000...');
	});
