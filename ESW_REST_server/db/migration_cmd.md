### Sequelize Initialization
```
npx sequelize init
```

### Create Database
```
npx sequelize db:create
```

### Make Users Model
```
npx sequelize-cli model:generate --name User --attributes age:string,email:string,gender:string,nickname:string,kakaoId:string
```

##### Kakao User Information Example
```
{
    "age":"AGE_20_29",
    "email":"ehdgk97891@naver.com",
    "gender":"MALE",
    "kakao_id":2418123930,
    "nickname":"김동하"
}
```

### Running migrations
```
npx sequelize-cli db:migrate
```