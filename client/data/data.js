import Mock from 'mockjs';

// 生成标题数据
export let titleList = Mock.mock({
	"list|3-6": [
		{
			'title': '@TITLE',
			'authorId|+1': 1,
			'url': '@URL'
		}
	]
});

// 生成作者数据
export let authorList = Mock.mock({
	"list|3-6": [
		{
			'id|+1': 1,
			'name': '@FIRST' 
		}
	]
});
