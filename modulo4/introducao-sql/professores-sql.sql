CREATE TABLE professores(
id INT PRIMARY KEY ,
nome VARCHAR(255) NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
idade INT
);

INSERT INTO professores
(id, nome, email, idade)
VALUES (1, "doug", "douggx@hotmail.com", 24);

DELETE FROM professores
WHERE id = 1;

DESCRIBE professores;

SELECT * FROM professores;Actor