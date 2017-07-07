let data = {
  "1": {
    "id": "1",
    "name": "Dan"
  },
  "2": {
    "id": "2",
    "name": "Marie"
  },
  "3": {
    "id": "3",
    "name": "Jessie"
  }
};

let graphql = require('graphql');
let graphqlHTTP = require('express-graphql');
let express = require('express');

let userType = new graphql.GraphQLObjectType({
	name: 'User',
	fields: {
		id: { type: graphql.GraphQLString},
		name: { type: graphql.GraphQLString}
	}
});

let schema = new graphql.GraphQLSchema({
	query: new graphql.GraphQLObjectType({
		name: 'Query',
		fields: {
			user: {
				type: userType,
				args: {
					id: { type: graphql.GraphQLString}
				},
				resolve: (_, args) => {
					return data[args.id];
				}
			}
		}
	})
});

express()
	.use('/graphql', graphqlHTTP({ schema: schema, pretty: true}))
	.listen(3000);

console.log('GraphQL server is running on http://172.0.0.1:3000/graphql');
