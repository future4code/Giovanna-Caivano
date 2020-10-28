### Exercício 1

a) Quando usamos o raw recebemos como resposta um array que contém um array com nossos dados e um array com dados sobre a tabela.

b)
```
async function searchActorByName(
    name:string
    ): Promise<Actor[]> {
        try{
            const result = await connection
                .raw(`
                SELECT * FROM Actor
                WHERE name LIKE "%${name}%"
                `)
                return result[0]
        } catch (error) {
            console.log(error)
            return []
        }
    
}
```

c)
```
async function countByGender(
    gender:string
    ): Promise<any> {
        try{
            const result = await connection
                .raw(`
                SELECT COUNT(*) FROM Actor
                WHERE gender = "${gender}"
                `)
                return result[0]
        } catch (error) {
            console.log(error)
            return []
        } 
}

```


### Exercício 2

a)
```
```

b)
```
```

c)
```
```

### Exercício 3

a)
```
```

b)
```
```

### Exercício 4

a)
```
```

b)
```
```

### Exercício 5

```
```

### Exercício 6

```
```

### Exercício 7

```
```