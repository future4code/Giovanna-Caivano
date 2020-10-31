...
...

### Exercício 1
a) VARCHAR(255) cria colunas que aceitam strings com até 255 caracteres. PRIMARY KEY indica que aquela coluna receberá os dados que serão identificadores únicos daquela tabela. NOT NULL indica que aquele campo deve ser sempre preenchido. DATE aceita dados no formato de data. VARCHAR(6) aceita strings de até 6 caracteres.
b) SHOW DATABASES mostrou todas as bases de dados disponíveis nessa conexão. SHOW TABLES mostrou as tabelas já criadas. Neste caso, apenas a tabela de Atores.
c) o DESCRIBE faz um resumo das características da tabela, para cada campo ele indica o tipo, se pode ser null ou não, o tipo de key, qual é o valor atribuído caso nenhum valor seja fornecido.


### Exercício 2
a) Query que cria novo ator:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```

b) ErrorCode: 1602. Duplicate entry '002' for key 'PRIMARY'. O erro diz que a tentativa de entrada é uma duplicação de um campo que já existe na coluna definida como PRIMARY KEY. Isso acontece porque definimos o id como único ao usar o PRIMARY KEY, então não pode haver duplicação.

c) Error Code: 1136. Column count doesn't match value count at row 1. Isso ocorre porque a quantidade de colunas passada entre parênteses não é a mesma quantidade de valores fornecidos para inserção do ator. Foram fornecidos os nomes de 3 campos mas são passados 5 valores.
Query corrigida:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

d) Error Code: 1364. Field 'name' doesn't have a default value. A coluna name não tem um valor default, portanto, esse parâmetro precisa ser fornecido.
Query corrigida:
```
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  "Nome do Ator",
  400000,
  "1949-04-18", 
  "male"
);
```

e) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1. O erro acusa que o formato da data está errado, porque ele só identificou o ano. Isso aconteceu porque estava sem aspas.
Query corrigida:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

### Exercício 3
a) Query:
```
SELECT * FROM Actor WHERE gender = "female";
```

b) Query:
```
SELECT salary FROM Actor WHERE name = "Tony Ramos";
```

c) Query abaixo. Como não há nenhuma linha em que o gender tenha esse valor, nenhuma linha foi retornada.
```
SELECT * FROM Actor WHERE gender = "invalid";
```

d) Query:
```
SELECT id, name, salary FROM Actor WHERE salary < 500000
```

### Exercício 4
a) A query seleciona todas as colunas da tabela atores em que o nome comece com A ou com J e com salário acima de 300mil.

b) Query:
```
SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;
```

c) Query:
```
SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%";
```

d) Query:
```
SELECT * FROM Actor WHERE (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%A%" OR name LIKE "%a%") AND salary BETWEEN 350000 AND 900000;
```

### Exercício 5
a) Query abaixo. Cria a tabela Movies que receberá 5 valores, todos obrigatórios. O id será a chave primária (identificador) e deve ser uma string. O movie_name é o nome do filme e deve ser também uma string. 'synopsis' guardará o texto de sinopse e será do tipo TEXT que suporta até pouco mais de 65mil caracteres. A data de lançamento é o launch_date, que tem formato data YYYY-MM-DD. Por mim, o classification é a avaliação do filme que é um TINYINT que vai de 0 a 10. Todas as linhas da tabela, conterão esses 5 valores.
```
CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    movie_name VARCHAR(255) NOT NULL,
    synopsis TEXT NOT NULL,
    launch_date DATE NOT NULL,
	classification TINYINT(10) NOT NULL
);
```

### Exercício 6
a) Query:
```
SELECT id, movie_name, classification FROM Movies WHERE id = "001";
```

b) Query:
```
SELECT * FROM Movies WHERE movie_name = "Doce de mãe";
```

c) Query:
```
SELECT id, movie_name, synopsis FROM Movies WHERE classification > 7;
```

### Exercício 7
a) Query:
```
SELECT * FROM Movies WHERE movie_name LIKE "%vida%";
```

b) Query:
```
SELECT * FROM Movies WHERE movie_name LIKE "%confusões%" OR synopsis LIKE "%confusões%";
```

c) Query:
```
SELECT * FROM Movies WHERE launch_date < NOW();
```

d) Query:
```
SELECT * FROM Movies WHERE (movie_name LIKE "%confusões%" OR synopsis LIKE "%confusões%") AND launch_date < NOW() AND classification > 7;
```

