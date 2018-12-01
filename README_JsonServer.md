
```shell
npm install -g json-server
```

新建一个JSON-server的项目：
```shell
mkdir myvue
cd myvue
npm init
npm install json-server --save  # 存放到当前的package.json中
```

配置JSON-Server：
```json
[lavenliu@mybox myvue]$ cat package.json 
{
  "name": "myvue",
  "version": "1.0.0",
  "description": "haha",
  "main": "index.js",
  "scripts": {
    "json:server": "json-server --watch db.json"
  },
  "author": "lavenliu",
  "license": "GPL-3.0",
  "dependencies": {
    "json-server": "^0.12.1"
  }
}
```

可以使用jsonserver的官方数据，其配置如下：
```json
[lavenliu@mybox myvue-json-server]$ cat package.json 
{
    "name": "myvue",
    "version": "1.0.0",
    "description": "haha",
    "main": "index.js",
    "scripts": {
        "json:server": "json-server --watch db.json",
        "json:server:remote": "json-server http://jsonplaceholder.typicode.com/db"
    },
    "author": "lavenliu",
    "license": "GPL-3.0",
    "dependencies": {
        "json-server": "^0.12.1"
    }
}
```

设置数据文件：
```json
[lavenliu@mybox myvue]$ cat db.json
{
    "users": [
        {
            "name": "LavenLiu",
            "phone": "333-444-555",
            "email": "lavenliu@gmail.com",
            "id": 1,
            "age": 28,
            "companyId": 1
        },
        {
            "name": "Wade",
            "phone": "333-444-555",
            "email": "laven@163.com",
            "id": 2,
            "age": 23,
            "companyId": 2
        },
        {
            "name": "TaoQi",
            "phone": "333-444-555",
            "email": "taoqi@gmail.com",
            "id": 3,
            "age": 23,
            "companyId": 3
        },
        {
            "name": "HaHa",
            "phone": "333-444-555",
            "email": "haha@gmail.com",
            "id": 4,
            "age": 18,
            "companyId": 3
        },
        {
            "name": "Kobi",
            "phone": "333-444-555",
            "email": "lavenliu@gmail.com",
            "id": 5,
            "age": 38,
            "companyId": 5
        }
    ],
    "companies": [
        {
            "id": 1,
            "name": "Apple",
            "description": "Apple is good!"
        },
        {
            "id": 2,
            "name": "Microsoft",
            "description": "Microsoft is good!"
        },
        {
            "id": 3,
            "name": "Google",
            "description": "Google is good!"
        },
        {
            "id": 4,
            "name": "Amazon",
            "description": "Amazon is good!"
        }
    ]
}
```

运行JSON-Server：
```bash
[lavenliu@mybox myvue]$ npm run json:server

> myvue@1.0.0 json:server /home/lavenliu/myvue
> json-server --watch db.json


  \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:3000/users
  http://localhost:3000/companies

  Home
  http://localhost:3000
```

运行之后就可以进行数据的查询了。查询结果如下：

```bash

# 获取年龄大于等于30的
http://localhost:3000/users?age_gte=30

# 获取年龄在30与40之间
http://localhost:3000/users?age_gte=30&age_lte=40
```


可以使用POST请求来增加数据：

```bash
curl -XPOST -H "Content-Type: application/json" http://localhost:3000/users -d '{
"name": "test1",
"phone": "13166668888",
"email": "test1@qq.com",
"age": 25,
"companyId": 2
}'
```

可以使用DELETE请求来删除数据：

```bash
curl -XDELETE http://localhost:3000/users/6
```

可以使用PATCH请求来修改数据：

```bash
curl -XPATCH -H "Content-Type: application/json" http://localhost:3000/users/5 -d '
> { "name": "niubility" }'
{
  "name": "niubility",
  "phone": "13166668888",
  "email": "test1@qq.com",
  "age": 25,
  "companyId": 2,
  "id": 5
}
```
