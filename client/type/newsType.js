import {
	GraphQLObjectType,
	GraphQLList
} from 'graphql';

import { titleList, authorList } from '../data/data';

import TitleType from './titleType';
import AuthorType from './authorType';

/*
 * News {
 *     title: Title,
 *     author: Author,
 * }
 *
 */

const NewsType = new GraphQLObjectType({
	name: 'NewsType',
	fields: {
		title: {
			type: new GraphQLList(TitleType),
			resolve: () => titleList.list
		},
		author: {
			type: new GraphQLList(AuthorType),
			resolve: () => authorList.list
		}
	}
});

export default NewsType;
