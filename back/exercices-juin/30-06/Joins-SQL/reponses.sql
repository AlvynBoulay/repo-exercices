/* 1 - INNER JOIN */
-- 1 : Nom complet de l'étudiant + intitulé de sa formation
SELECT * FROM Student INNER JOIN Course ON Student.course_id = Course.course_id;
-- 2 : lister les étudiants inscrits en "Data Analyst"
SELECT * FROM Student INNER JOIN Course ON Student.course_id = Course.course_id WHERE Course.course_name = 'Data Analyst';
-- 3 : Lister les examens avec nom, note, etc
SELECT * FROM Exam INNER JOIN Student ON Exam.student_id = Student.student_id INNER JOIN Course ON Exam.course_id = Course.course_id;


/* LEFT JOIN */
-- 4 : Afficher tous les étudiants avec leur formation, ceux sans formation aussi
SELECT * FROM Student LEFT JOIN Course ON Student.course_id = Course.course_id;
-- 5 : Afficher les étudiants sans formation 
SELECT * FROM Student LEFT JOIN Course ON Student.course_id = Course.course_id WHERE Course.course_id IS NULL;
-- 6 : Afficher tous les étudiants avec leurs examens, meme si ils en ont pas passé
SELECT * FROM Student LEFT JOIN Exam ON Student.student_id = Exam.student_id;


/* RIGHT JOIN */
-- 7 : Afficher toutes les formations même si aucun étudiant y est incrit
SELECT * FROM Student RIGHT JOIN Course ON Student.course_id = Course.course_id;
-- 8 : Afficher les examens associés a un cours, aussi les cours sans examens
SELECT * FROM Exam RIGHT JOIN Course ON Exam.course_id = Course.course_id;


/* FULL OUTER JOIN */
-- 9 : Lister toutes les combinaisons étudiant-formation même sans correspondance
SELECT * FROM Student AS s LEFT JOIN Course AS c ON s.course_id = c.course_id UNION SELECT * FROM Student AS s RIGHT JOIN Course AS c ON s.course_id = c.course_id;
-- 10 : Lister tous les examens et étudiants, même si l'un des deux est manquant 
SELECT * FROM Exam AS e LEFT JOIN Student AS s ON e.student_id = s.student_id UNION SELECT * FROM Exam AS e RIGHT JOIN Student AS s ON e.student_id = s.student_id;


/* SELF JOIN */
-- 11 : Trouver les paires d'étudiant nés a la même année
SELECT * FROM Student AS s1 INNER JOIN Student AS s2 ON s1.birth_year = s2.birth_year WHERE s1.student_id <> s2.student_id;
-- 12 : Associer chque étudiant à ceux qui sont plus agés qu'eux
SELECT * FROM Student AS s1 INNER JOIN Student AS s2 ON s1.birth_year > s2.birth_year;


/* CROSS JOIN */
-- 13 : Générer toutes les combinaisons possibles entre étudiants et types d’examen
SELECT * FROM Student CROSS JOIN (SELECT 'Ecrit' AS exam_type UNION ALL SELECT 'Oral' UNION ALL SELECT 'Projet') AS ExamTypes;
-- 14 : Compter le nombres de lignes produites par ce CROSS JOIN
SELECT COUNT(*) FROM Student CROSS JOIN (SELECT 'Ecrit' AS exam_type UNION ALL SELECT 'Oral' UNION ALL SELECT 'Projet') AS ExamTypes;


/* Aggrégations */
-- 15 : Moyenne des notes par étudiant
SELECT student_id, AVG(score) AS moyenne_notes FROM Exam GROUP BY student_id;
-- 16 : Note maximale obtenue par cours
SELECT course_id, MAX(score) AS note_maximale FROM Exam GROUP BY course_id;
-- 17 : étudiant ayant obtenue au moins un note > a 15
SELECT DISTINCT s.student_id, s.first_name, s.last_name FROM Student AS s JOIN Exam e ON s.student_id = e.student_id WHERE e.score > 15;