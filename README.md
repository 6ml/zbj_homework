## GraphQL vs REST

### REST

REST 指的是一组架构约束条件和原则，满足这些约束条件和原则的应用程序或设计就是 RESTFul

REST 适合于**简单逻辑**的查询请求，**对于具有复杂资源间关联的请求，可能需要进行多次查询请求**

RESTful 查询方式：

```JavaScript
GET /tracks/ID

GET /playlists/ID

GET /playlists/ID/tracks
```

### GraphQL

GraphQL 可以看做一个业务逻辑层灵活有效的辅助工具，处在前端和后台之间的**中间层**。
GraphQL 是一个数据抽象层，包括数据格式、数据关联、查询方式定义与实现等等。

GraphQL 通过**对于多个 REST 风格的简单的借口的排列组合提供更多复杂多变的查询方式**。
GraphQL 有一个 schema 和静态 types ，并且**限制了数据的类型**。

GraphQL 查询方式：

```Json
graphql.query(`
{
	latestPost {
    	_id,
        title,
        content,
        author {
        	name
        },
        comments {
        	content,
            author {
            	name
            }
        }
    }
}
`);
```
