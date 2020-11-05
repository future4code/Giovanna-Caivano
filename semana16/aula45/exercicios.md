## Exercício 1

a) Apaga a coluna salary.

b) Altera o nome da coluna de gender para sex e mantém a quantidade de caracteres.

c) Altera a quantidade de caracteres aceito na coluna gender.

d) Query:  
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

## Exercício 2

a) Query:
```
UPDATE Actor 
SET 
    name = 'Novo Nome', birth_date = '1990-05-04'
WHERE
    id = '003'
```

b) Query 1:
```
UPDATE Actor 
SET 
    name = 'JULIANA PÃES'
WHERE
    name = 'Juliana Paes'
```
Quer 2:
```
UPDATE Actor 
SET 
    name = 'Juliana Paes'
WHERE
    name = 'JULIANA PÃES'

```

c) Query:
```
UPDATE Actor 
SET 
    name = 'Juliana Paes',
    salary = 650000,
    birth_date = '1979-01-01',
    gender = 'female'
WHERE
    id = '005';
```

d) A query é executada com sucesso mas nada se altera na tabela.

## Exercício 3

a) Query:
```
DELETE FROM Actor 
WHERE
    name = "Fernanda Montenegro";
```

b) Query:
```
DELETE FROM Actor 
WHERE
    gender = "male" AND salary > 1000000
```

## Exercício 4

a)
```
SELECT 
    MAX(salary) AS 'Maior salário'
FROM
    Actor
```

b)
```
SELECT 
    MIN(salary) AS 'Menor salário'
FROM
    Actor
```

c)
```
SELECT 
    COUNT(*)
FROM
    Actor
WHERE
    gender = 'female'
```

d)
```
SELECT 
    SUM(salary) AS 'Soma de salários'
FROM
    Actor
```

## Exercício 5

a) A query agrupa os atores por gênero.

b) Query:
```
SELECT 
    id, name
FROM
    Actor
ORDER BY name DESC
```

c) Query:
```
SELECT 
    name, salary
FROM
    Actor
ORDER BY salary DESC
```

d) Query:
```
SELECT 
    id, name, salary
FROM
    Actor
ORDER BY salary DESC
LIMIT 3
```

e) Query:
```
SELECT 
    AVG(salary), gender
FROM
    Actor
GROUP BY gender
```

## Exercício 6

a) Query:
```
ALTER TABLE Movies ADD playing_limit_date DATE;
```

b)
```
ALTER TABLE Movies MODIFY COLUMN classification FLOAT NOT NULL;
```

c) Query 1:
```
UPDATE Movies
SET 
    playing_limit_date = '2020-10-30'
WHERE
    id = '001';
```
Query 2:
```
UPDATE Movies
SET 
    playing_limit_date = '2020-01-30'
WHERE
    id = '002';
```

d) A query é executada mas 0 linhas são afetadas por ela.

## Exercício 7

a) Query:
```
SELECT 
    *
FROM
    Movies
WHERE
    classification > 7.5
```

b) Query:
```
SELECT 
    AVG(classification)
FROM
    Movies
```

c) Query:
```
SELECT 
    COUNT(*)
FROM
    Movies
WHERE
    playing_limit_date >= CURDATE()
```

d) Query:
```
SELECT 
    COUNT(*)
FROM
    Movies
WHERE
    launch_date >= CURDATE()
```

e) Query:
```
SELECT 
    MAX(classification)
FROM
    Movies
```

f) Query:
```
SELECT 
    MIN(classification)
FROM
    Movies
```

## Exercício 8

a) Query:
```
SELECT 
    *
FROM
    Movies
ORDER BY movie_name ASC
```

b) Query: 
```
SELECT 
    *
FROM
    Movies
ORDER BY movie_name DESC
LIMIT 5
```

c) Query:
```
SELECT 
    *
FROM
    Movies
WHERE
    playing_limit_date >= CURDATE()
ORDER BY playing_limit_date ASC
LIMIT 3
```

d) Query:
```
SELECT 
    *
FROM
    Movies
ORDER BY classification DESC
LIMIT 3
```