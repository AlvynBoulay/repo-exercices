-- 1 : Affiche les étudiants ayant l'année de naissance la plus récente
SELECT * FROM Student WHERE birth_year = (SELECT MAX(birth_year) FROM Student);

-- 2 : Affiche ma moyenne des scores pour chaue étudiant, même ceux qui ont pas passé d'exam
SELECT s.student_id, s.first_name, s.last_name, ROUND(AVG(e.score), 2) AS moyenne_generale FROM Student
 s LEFT JOIN Exam e ON s.student_id = e.student_id GROUP BY s.student_id, s.first_name, s.last_name;

 -- 3 : Trouver les étuiants qui ont eu la meilleur note dans le cour DevWeb
 SELECT s.student_id, s.first_name, s.last_name, e.score FROM Exam e JOIN Student s ON e.student_id = s.student_id WHERE
 e.course_id = (SELECT course_id FROM Course WHERE course_name = 'Développement Web') 
 AND e.score = (SELECT MAX(score) FROM Exam WHERE course_id = (SELECT course_id FROM Course WHERE course_name = 'Développement Web')); 