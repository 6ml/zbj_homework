// let Mock = require('mockjs');
// // let data = Mock.mock({
// // 	'list|1-10': [{
// // 		'id|+1': 1,
// // 		'name|1-2': 'asdsadasdasdasdasda'
// // 	}]
// // });

// // let data = Mock.mock({
// //     'number1|1-100.1-10': 1,
// //     'number2|123.1-10': 1,
// //     'number3|123.3': 1,
// //     'number4|123.10': 1.123
// // });

// let Random = Mock.Random;

let data = Mock.mock({
	"list|3": [
		{
			'title': '@FIRST',
			'author|+1': 1,
			'site': '@URL'
		}
	]
});

// console.log(JSON.stringify(data));
// console.log(data);

import {
	graphql, GraphQLSchema, GraphQLObjectType, GraphQLString
} from 'graphql';

let schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'RootQueryType',
		fields: {
			hello: {
				type: GraphQLString,
				resolve() {
					return data;
				}
			},
			another: {
				type: GraphQLString,
				resolve(){
					return 'yes';
				}
			}
		}
	})
});

let query = '{ hello, another }';

graphql(schema, query).then(result => {
	console.log(result);
});

