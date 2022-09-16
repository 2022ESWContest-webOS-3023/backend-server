### User table
```
npx sequelize-cli model:generate --name User --attributes age:string,email:string,gender:string,nickname:string
```

#### ex
{
    "age":"AGE_20_29",
    "email":"ehdgk97891@naver.com",
    "gender":"MALE",
    "id":2418123930,
    "nickname":"김동하"
}


### Running migrations
```
npx sequelize-cli db:migrate
```