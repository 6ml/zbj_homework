import {
	GraphQLObjectType,
	GraphQLList
} from 'graphql';

import { titleList, authorList } from '../data/data';

import TitleType from './titleType';
import AuthorType from './authorType';

/*
 * Article {
 *     title: Title,
 *     author: Author,
 * }
 *
 */

const ArticleType = new GraphQLObjectType({
	name: 'ArticleType',
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

export default ArticleType;
