## Cookenu

### Como rodar o projeto
```
npm install
```

```
npm run sql-setup
```

Criar um arquivo .env na raíz do projeto com os dados abaixo:
```
//dados do seu banco
DB_HOST
DB_USER
DB_PASSWORD
DB_DATABASE_NAME

//suas preferências para key e expire
JWT_KEY
JWT_EXPIRES_IN

//suas preferências de cost
BCRYPT_COST
```

```
npm start
```
