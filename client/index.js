import {
	graphql
} from 'graphql';

import schema from './type/schema';

// 查询语句
let query = '{ article{title{title,url,authorId},author{name,id}} }';

// 查询
graphql(schema, query).then(result => {
	// result 即为查询到的数据
	let data = result.data.article;
	let author = data.author;
	let title = data.title;
	let html = "<ul>";

	// 将作者信息与标题信息关联
	title.forEach((title) => {
		author.forEach((author) => {
			if(title.authorId === author.id){
				title.authorName = author.name;
			}
		});

		// 若没有作者信息，将作者信息写成匿名
		if(!title.authorName){
			title.authorName = "Anonymous";
		}

		html += `<li>${title.title}(${title.url})<p>${title.authorName}</p></li>`;
	});
	
	html += "</ul>";

	// 将拼接好的 html 插入到页面中
	document.getElementById('root').innerHTML = html;
});


