/* Insertion jeu de données */
LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 9.3/Uploads/locovelo/client.csv'
INTO TABLE client FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 9.3/Uploads/locovelo/typevelo.csv'
INTO TABLE typevelo FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 9.3/Uploads/locovelo/velo.csv'
INTO TABLE velo FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 9.3/Uploads/locovelo/location.csv'
INTO TABLE location FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 ROWS;

