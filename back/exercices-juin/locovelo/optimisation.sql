-- accéléré la recherche des locations par client :
CREATE INDEX idx_location_client_id ON location(id_client);

-- accéléré la recherche par date de début
CREATE INDEX idx_location_date_heure_debut ON location(date_heure_debut);

-- accéléré la recherche par date de fin
CREATE INDEX idx_location_date_heure_fin ON location(date_heure_fin);

-- index composite pour recherche par client et date de début
CREATE INDEX idx_location_client_date_debut ON location(id_client, date_heure_debut);

-- index composite pour recherche par client et date de fin
CREATE INDEX idx_location_client_date_fin ON location(id_client, date_heure_fin);

-- recherche par velo
CREATE INDEX idx_location_velo ON location(id_velo);