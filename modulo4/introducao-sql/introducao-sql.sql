CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY, 
name VARCHAR(255) NOT NULL, 
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);

-- a) Utilizamos Date para representar a data e varchar para as outras variaveis
-- b)

SHOW TABLES;

-- c) utilizando describe para ver a estrutura
DESCRIBE Actor;

-- 2 

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"001",
"Tony Ramos",
400000,
"1948-08-25",
"male"
);

-- a)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
"120000",
"1963-08-23",
"female"
);

-- b) Primary Keys não podem ser repetidas.
-- c)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

-- d)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antonio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

-- e) 

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333,
  "1979-03-26", 
  "female"
);

SELECT * from Actor;

SELECT id, salary from Actor;

SELECT id, name from Actor WHERE gender = "male";

-- a) *Escreva uma query que retorne todas as informações das atrizes*

SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "female";

-- b) Escreva uma query que retorne o salário do ator com o nome Tony Ramos

SELECT salary from Actor WHERE name = "Tony Ramos";

-- c) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.

SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "invalid";

-- c) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.

SELECT id, name, salary, birth_date, gender From Actor Where salary > 500000;

-- e) 

SELECT id, name from Actor WHERE id = "002";

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

-- 4 a) Selecione tudo da table Actor onde "name" começa com a letra A 
-- ou "name" começa com a letra J e salario é maior que 300000

-- b)

SELECT * FROM Actor
WHERE (name NOT LIKE "A%" ) and salary > 350000;

-- c)

SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "&g%");

-- d)

SELECT * FROM Actor
WHERE (name LIKE "%a%" OR name LIKE "&A%" OR name LIKE "%g%" OR name LIKE "%G%") and salary BETWEEN 350000 and 900000;

-- 5
-- a)

CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);

-- b)

INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-06-01",
7
);

-- c)

INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);

-- d)

INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);

-- e)

INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
"004",
"O pagador de promessas",
"Depois de seu asno de estimação ter sido atingido por um raio, Zé do Burro faz a promessa de carregar nas costas uma imensa cruz de madeira até a igreja de Santa Bárbara. Porém, sua jornada acaba se tornando um pesadelo.",
"1962-04-17",
8
);

-- 6
-- a)

SELECT id, title, synopsis FROM Movie
WHERE id = "001";

-- b)

SELECT * FROM Movie WHERE title = "O pagador de promessas";

-- c)

SELECT id, title, synopsis FROM Movie WHERE rating >= 7;

-- 7
-- a)

SELECT * FROM Movie
WHERE title LIKE "%vida%";

-- b)

SELECT * FROM Movie
WHERE title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%";
      
-- c) 

SELECT * FROM MOVIE
WHERE release_date < "2022-08-22";

-- d)

SELECT * FROM MOVIE
WHERE release_date < "2022-08-22" AND 
      (title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;










