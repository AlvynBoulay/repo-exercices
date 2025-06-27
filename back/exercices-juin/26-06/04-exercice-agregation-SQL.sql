CREATE DATABASE IF NOT EXISTS tp_agregats;
USE tp_agregats;

CREATE TABLE utilisateur (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100),
    prenom VARCHAR(100),
    age INT,
    email VARCHAR(100)
);

INSERT INTO utilisateur (nom, prenom, age, email) VALUES
('Durand', 'Lucie', 25, 'lucie.durand@mail.com'),
('Martin', 'Hugo', NULL, 'hugo.martin@mail.com'),
('Bernard', 'Claire', 34, NULL),
('Petit', 'Léa', 29, 'lea.petit@mail.com'),
('Lemoine', 'Nina', NULL, NULL);

CREATE TABLE commande (
    id INT PRIMARY KEY AUTO_INCREMENT,
    utilisateur_id INT,
    montant DECIMAL(10,2),
    date_commande DATE,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateur(id)
);

INSERT INTO commande (utilisateur_id, montant, date_commande) VALUES
(1, 120.50, '2024-01-15'),
(2, NULL, '2024-02-01'),
(1, 300.00, '2024-02-10'),
(3, 250.00, '2024-03-01'),
(4, 100.00, NULL);



/* Exercice 1 */

-- Combien d'utilisateurs sont enregistrés  
SELECT COUNT(*) FROM utilisateur; --(5)

-- Combien d'email valides(non null) uniques sont présents
SELECT COUNT(DISTINCT email) FROM utilisateur; --(3)

-- Age moyen des utilisateurs
SELECT AVG(age) FROM utilisateur; --(29.33)

-- Quel est l'âge minimum et maximum 
SELECT MIN(age) FROM utilisateur; -- (25 a 34)
SELECT MAX(age) FROM utilisateur;

-- Combien de commandes ont été passé
SELECT COUNT(*) FROM commande; --(5)

-- Quel est le montant total de toutes les commandes
SELECT SUM(montant) FROM commande; --(770.50)

-- Quel est le montant moyen des commandes
SELECT AVG(montant) FROM commande; --(192.625)

-- Combien de commandes ont un montant spécifié (non NULL)
SELECT COUNT(montant) FROM commande; --(4)

-- Quel est la date de commande la plus récente
SELECT MAX(date_commande) FROM commande; --(2024/03/01)

-- Quel est le nombre total de client ayant passé au moins une commande
SELECT COUNT(DISTINCT utilisateur_id) FROM commande; --(4)





/* Exercice 2 */

-- Combien de commandes ont été passés par utilisateur 
SELECT utilisateur_id, COUNT(*) AS nb_commandes FROM commande GROUP BY utilisateur_id;

-- Quels utilisateurs ont passé plus d'une commande 
SELECT utilisateur_id, COUNT(*) AS nb_commandes FROM commande GROUP BY utilisateur_id HAVING COUNT(*) > 1;
