/* PHASE 2 */
-- 1. Afficher les scores de chaque joueur pour la session 12, triés par score décroissant.
SELECT j.pseudo, s.score FROM scores s JOIN joueurs j ON s.id_joueur = j.id WHERE s.id_session = 12 ORDER BY s.score DESC;

-- 2. Afficher la liste des joueurs n'ayant jamais participé à une session.
SELECT j.pseudo FROM joueurs j LEFT JOIN scores s ON j.id = s.id_joueur WHERE s.id_joueur IS NULL;

-- 3. Lister les titres des jeux avec leur genre.
SELECT je.titre, g.nom AS genre FROM jeux je JOIN genres g ON je.id_genre = g.id;

-- 4. Afficher pour chaque joueur le nombre total de sessions jouées.
SELECT j.pseudo, COUNT(s.id_session) AS nb_sessions FROM joueurs j LEFT JOIN scores s ON j.id = s.id_joueur GROUP BY j.id;

-- 5. Donner le score moyen obtenu par chaque joueur, avec leur pseudo.
SELECT j.pseudo, AVG(s.score) AS score_moyen FROM joueurs j JOIN scores s ON j.id = s.id_joueur GROUP BY j.id;

-- 6. Lister les joueurs ayant obtenu un score supérieur à 1400 au moins une fois, avec la date et le jeu.
SELECT j.pseudo, se.date_session, je.titre FROM scores s JOIN joueurs j ON s.id_joueur = j.id 
JOIN sessions se ON s.id_session = se.id JOIN jeux je ON se.id_jeu = je.id WHERE s.score > 1400;

-- 7. Afficher les membres de chaque équipe, avec le nom de l'équipe, le pseudo et le pays.
SELECT e.nom AS equipe, j.pseudo, j.pays FROM membres_equipes me JOIN joueurs j ON me.id_joueur = j.id 
JOIN equipes e ON me.id_equipe = e.id;

-- 8. Afficher les jeux ayant eu plus de 3 sessions différentes.
SELECT j.titre FROM jeux j JOIN sessions s ON j.id = s.id_jeu GROUP BY j.id HAVING COUNT(s.id) > 3;

-- 9. Donner pour chaque session le jeu joué, la date et le nombre de joueurs présents.
SELECT s.id, j.titre, s.date_session, COUNT(sc.id_joueur) AS nb_joueurs FROM sessions s 
JOIN jeux j ON s.id_jeu = j.id LEFT JOIN scores sc ON s.id = sc.id_session GROUP BY s.id;


-- 10. Afficher les scores moyens par jeu, triés du plus fort au plus faible.
SELECT j.titre, AVG(s.score) AS score_moyen FROM scores s JOIN sessions se ON s.id_session = se.id 
JOIN jeux j ON se.id_jeu = j.id GROUP BY j.id ORDER BY score_moyen DESC;





/* PHASE 3 */
-- Sauvegarder la base
mysqldump -u root -p --routines --events --triggers --databases gameworld > gameworld_backup.sql

-- Supprimer la base
mysql -u root -p -e "DROP DATABASE gameworld;"

-- Restaurer la base
mysql -u root -p < gameworld_backup.sql

-- Bonus : Exporter uniquement joueurs et scores
mysqldump -u root -p gameworld joueurs scores > mini_backup.sql





/* PHASE 4 */
-- 1. Créer l'utilisateur 'analyste' avec un mot de passe sécurisé
CREATE USER 'analyste'@'localhost' IDENTIFIED BY 'motdepassesecurise';
-- 2 - Donner les droits en lecture seule
GRANT SELECT ON gameworld.joueurs TO 'analyste'@'localhost';
GRANT SELECT ON gameworld.scores TO 'analyste'@'localhost';
GRANT SELECT ON gameworld.sessions TO 'analyste'@'localhost';
FLUSH PRIVILEGES;
-- 3 - Vérification
SHOW GRANTS FOR 'analyste'@'localhost'; -- en utilisateur root
mysql -u analyste -p
USE gameworld;
SELECT * FROM joueurs; -- ok
INSERT INTO joueurs (id, pseudo, pays) VALUES (999, 'TestUser', 'Nowhere'); -- Pas la permission
SELECT * FROM jeux;  -- Pas la permission
-- 4 - Révoquer les droits puis supprimer l'utilisateur proprement
REVOKE SELECT ON gameworld.joueurs FROM 'analyste'@'localhost';
REVOKE SELECT ON gameworld.scores FROM 'analyste'@'localhost';
REVOKE SELECT ON gameworld.sessions FROM 'analyste'@'localhost';
DROP USER 'analyste'@'localhost';
FLUSH PRIVILEGES;





/* BONUS */
-- Affiche le pseudo des joueurs et leur score moyen :
CREATE VIEW vue_scores_moyens AS SELECT j.pseudo, AVG(s.score) AS score_moyen FROM joueurs j JOIN scores s ON j.id = s.id_joueur GROUP BY j.id;
-- Renvoie les sessions et scores associés à un jeu donné :
DELIMITER //

CREATE PROCEDURE stats_jeu(IN jeu_id INT)
BEGIN
  SELECT s.id AS id_session, s.date_session, j.pseudo, sc.score
  FROM sessions s
  JOIN scores sc ON s.id = sc.id_session
  JOIN joueurs j ON j.id = sc.id_joueur
  WHERE s.id_jeu = jeu_id
  ORDER BY s.date_session;
END //

DELIMITER ;
-- Executer avec
CALL stats_jeu(5);
