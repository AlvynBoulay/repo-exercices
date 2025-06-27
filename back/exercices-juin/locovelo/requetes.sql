-- lister les vélos disponibles :
SELECT * FROM velo WHERE disponible = 1;

-- lister les locations faites par un client donné avec identifiant 1
SELECT * FROM location WHERE id_client = 1;

-- calculer le nombre total de locations
SELECT COUNT(*) AS nb_total_locations FROM location;

-- calculer les revenus totaux générés
SELECT SUM(montant_total) AS revenus_totaux FROM location;

--afficher le revenu total par mois
SELECT YEAR(date_heure_debut) AS annee, MONTH(date_heure_debut) AS mois, SUM(montant_total) AS revenu_par_mois 
FROM location GROUP BY annee, mois ORDER BY annee, mois;