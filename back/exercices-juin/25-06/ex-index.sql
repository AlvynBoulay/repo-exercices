/* CONSIGNE : Ajouter un index sur la colonne id_client de Commande */
CREATE TABLE Client(id INT AUTO_INCREMENT PRIMARY KEY, nom TEXT);
CREATE TABLE Commande(id INT AUTO_INCREMENT PRIMARY KEY, id_client INT, date_commande DATE, FOREIGN KEY (id_client) REFERENCES Client(id));

-- Création de l'index
CREATE INDEX idx_cmde ON Commande(id_client);
SELECT * FROM Commande WHERE id_client = 3;