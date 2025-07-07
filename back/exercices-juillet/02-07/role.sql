-- ETAPE 1 : Creer les utilisateurs
CREATE USER 'admin'@'localhost' IDENTIFIED BY 'admin123';
CREATE USER 'lecteur'@'localhost' IDENTIFIED BY 'lecture456';
CREATE USER 'gestionnaire'@'localhost' IDENTIFIED BY 'gest789';

-- ETAPE 2 : gérer les privilèges individuels
GRANT ALL PRIVILEGES ON cinema.* TO 'admin'@'localhost';
GRANT SELECT ON cinema.* TO 'lecteur'@'localhost';
GRANT SELECT, INSERT, UPDATE, DELETE ON cinema.* TO 'gestionnaire'@'localhost';
SHOW GRANTS

-- ETAPE 3 : Utiliser des rôles pour simplifier la gestion
CREATE ROLE 'role_lecteur';
GRANT SELECT ON cinema.* TO 'role_lecteur';

CREATE ROLE 'role_gestionnaire';
GRANT SELECT, INSERT, UPDATE, DELETE ON cinema.films TO 'role_gestionnaire';
GRANT SELECT, INSERT, UPDATE, DELETE ON cinema.projection TO 'role_gestionnaire';

GRANT 'role_lecteur' TO 'lecteur'@'localhost';
GRANT 'role_gestionnaire' TO 'gestionnaire'@'localhost';

SET DEFAULT ROLE 'role_lecteur' TO 'lecteur'@'localhost';
SET DEFAULT ROLE 'role_gestionnaire' TO 'gestionnaire'@'localhost';

SHOW GRANTS FOR 'lecteur'@'localhost';
SHOW GRANTS FOR 'gestionnaire'@'localhost';
SHOW GRANTS FOR 'admin'@'localhost';

-- ETAPE 4 : Tester les accès
mysql -u lecteur -p
SELECT * FROM films;
UPDATE films SET titre = 'Nouveau Titre' WHERE id = 1; (refusé)

mysql -u gestionnaire -p
SELECT * FROM films;
INSERT INTO films (titre, realisateur, annee_sortie, genre, duree_minutes, note) VALUES ('Inception', 'Christopher Nolan', '2010', 'Science-fiction', '148', '8.5');
DELETE FROM projection WHERE id = 1;


mysql -u admin -p
SELECT * FROM films;
DELETE FROM projection WHERE id = 1;
UPDATE films SET titre = 'Nouveau Titre' WHERE id = 1;