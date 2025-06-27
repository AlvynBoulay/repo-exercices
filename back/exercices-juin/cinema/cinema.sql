-- Création de la database
CREATE DATABASE cinema_simple;
USE cinema_simple;

-- Création de la table
CREATE TABLE films (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titre VARCHAR(255),
  realisateur VARCHAR(255),
  annee_sortie INT,
  genre VARCHAR(100),
  duree_minutes INT,
  note DECIMAL(3,1)
);

-- Insertion de données 
'
INSERT INTO films (titre, realisateur, annee_sortie, genre, duree_minutes, note) VALUES
('Inception', 'Christopher Nolan', '2010', 'Science-fiction', '148', '8.5'),
('Le Fabuleux Destin d\'Amélie Poulain', 'Jean-Pierre Jeunet', '2001', 'Comédie dramatique', '122', '9.7'),
('Parasite', 'Bong Joon-ho', '2019', 'Thriller', '132', '6.7'),
('Interstellar', 'Christopher Nolan', '2014', 'Science-fiction', '169', '7.8'),
('The Grand Budapest Hotel', 'Wes Anderson', '2014', 'Comédie', '100', '9.9');

-- Afficher les films qui ont une note de + de 8.5
SELECT titre, note FROM films WHERE note > 8.5;

-- Afficher les 3 films qui ont les notes les + hautes (décroissant)
SELECT titre, note FROM films ORDER BY note DESC LIMIT 3; 

-- Rechercher les films qui commence par un A (il n'y en a pas)
SELECT titre FROM films WHERE titre LIKE 'A%';

-- Calculer la durée moyenne et la durée maximale des films
SELECT AVG(duree_minutes) AS duree_moyenne, MAX(duree_minutes) AS duree_maximale FROM films;

-- Ajouter un nouveau film
INSERT INTO films (titre, realisateur, annee_sortie, genre, duree_minutes, note) VALUES ('Matrix', 'Lana et Lilly Wachowski', 1999, 'Acction/SF', 136, 8.7);

-- Ajouter 0.1 a la note
UPDATE films SET note = LEAST(note + 0.1, 10) WHERE annee_sortie < 2000;

-- Ajout d'une colonne + calcul de l’âge de chaque film par rapport à l’année en cours
ALTER TABLE films ADD COLUMN age_film INT;
UPDATE films SET age_film = YEAR(CURDATE()) - annee_sortie;

-- Supprimer les films de moins de 130minutes
DELETE FROM films WHERE duree_minutes < 130;

-- MAJ de la note du film Parasite et Suppression du film Avatar  
START TRANSACTION; 
UPDATE films SET note = 9.0 WHERE titre = 'Parasite'; 
DELETE FROM films WHERE titre = 'Avatar';
COMMIT;


-----------libelletitr


-- Création des tables
CREATE TABLE films (id INT AUTO_INCREMENT PRIMARY KEY, 
titre VARCHAR(255), 
duree_minutes INT, 
annee_sortie INT, 
note DECIMAL(3,1),
realisateur_id INT, 
FOREIGN KEY (realisateur_id) REFERENCES realisateur(id), 
acteurs_id INT);

CREATE TABLE acteurs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255),
  prenom VARCHAR(255),
  datenaissance DATE
);

CREATE TABLE realisateur (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255),
  prenom VARCHAR(255),
  datenaissance DATE
);

CREATE TABLE projection (
  id INT AUTO_INCREMENT PRIMARY KEY,
  ville VARCHAR(255),
  dateheure DATETIME,
  salle VARCHAR(255),
  films_id INT
);

CREATE TABLE genres (
  id INT AUTO_INCREMENT PRIMARY KEY,
  libelle VARCHAR(250)
);

CREATE TABLE filmacteurs (
  films_id INT,
  acteurs_id INT, 
  rolepersonnage VARCHAR(255)
);

CREATE TABLE filmgenres (
  films_id INT,
  genres_id INT
);



/* Ajouter des contraintes */
-- Table films
ALTER TABLE films MODIFY titre VARCHAR(100) NOT NULL;
ALTER TABLE films MODIFY duree_minutes INT DEFAULT 0;
ALTER TABLE films MODIFY annee_sortie INT NOT NULL;
-- Table acteurs
ALTER TABLE acteurs MODIFY nom VARCHAR(255) NOT NULL;
ALTER TABLE acteurs MODIFY prenom VARCHAR(255) NOT NULL;
ALTER TABLE acteurs MODIFY datenaissance DATE NOT NULL;
-- Table realisateur
ALTER TABLE realisateur MODIFY nom VARCHAR(255) NOT NULL;
ALTER TABLE realisateur MODIFY prenom VARCHAR(255) NOT NULL;
ALTER TABLE realisateur MODIFY datenaissance DATE NOT NULL;
-- Table projection
ALTER TABLE projection MODIFY ville VARCHAR(255) NOT NULL;
ALTER TABLE projection MODIFY dateheure DATETIME NOT NULL;
ALTER TABLE projection MODIFY salle VARCHAR(255) NOT NULL;
ALTER TABLE projection ADD CONSTRAINT check_films_id UNIQUE (films_id);
-- Table genres
ALTER TABLE genres MODIFY libelle VARCHAR(250) NOT NULL;
-- Table filmacteurs
ALTER TABLE filmacteurs MODIFY rolepersonnage VARCHAR(255) NOT NULL;
ALTER TABLE filmacteurs ADD CONSTRAINT check_films_id UNIQUE (films_id);
ALTER TABLE filmacteurs MODIFY acteurs_id INT NOT NULL;
-- Table filmgenres
ALTER TABLE filmgenres ADD CONSTRAINT check_films_id UNIQUE (films_id);
ALTER TABLE filmgenres MODIFY genres_id INT NOT NULL;

/* Ajouter des index */
CREATE INDEX idx_titre ON films(titre);
CREATE INDEX idx_acteurs ON acteurs(nom, prenom);
CREATE INDEX idx_realisateur ON realisateur(nom, prenom);
CREATE INDEX idx_projection ON projection(films_id, ville, dateheure);
CREATE INDEX idx_genres ON genres(libelle);


-- Insertion avec Fichier
LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 9.3/Uploads/realisateur.csv'
INTO TABLE realisateur FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 9.3/Uploads/acteurs.csv'
INTO TABLE acteurs FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 9.3/Uploads/projection.csv'
INTO TABLE projection FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 9.3/Uploads/genres.csv'
INTO TABLE genres FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 9.3/Uploads/films.csv'
INTO TABLE films FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 ROWS;