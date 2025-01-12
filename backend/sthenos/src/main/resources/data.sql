INSERT INTO category (description, measure, "name") VALUES
('Ejercicios enfocados en el empuje con la parte superior.', 'Repeticiones', 'Empuje'),
('Ejercicios enfocados en el jalado con la parte superior.', 'Repeticiones', 'Jalado'),
('Ejercicios enfocados en trabajar la resistencia estatica.', 'Segundos', 'Estatico');

INSERT INTO exercise (category, description, difficulty, image_url, "name") VALUES
(1, 'Ejercicio basico para pecho y triceps.', 'Facil', 'assets/exercises/push-up.jpg', 'Push-Up'),
(1, 'Ejercicio con los brazos extendidos y empujando de lado a lado.', 'Intermedio', 'assets/exercises/archer-push-up.jpg', 'Archer Push-Up'),
(2, 'Ejercicio para la espalda y los bíceps usando una barra fija.', 'Intermedio', 'assets/exercises/pull-up.jpg', 'Pull-Up'),
(2, 'Ejercicio basico para la espalda y biceps.', 'Intermedio', 'assets/exercises/inverted-row.jpg', 'Inverted row'),
(3, 'Ejercicio estatico para pecho, hombros y tríceps.', 'Facil', 'assets/exercises/planche.jpg', 'Planche'),
(3, 'Ejercicio estatico en barra con las piernas abiertas', 'Dificil', 'assets/exercises/straddle-front-lever.jpg', 'Straddle Front-lever'),
(3, 'Ejercicio dificil en barra con los brazos y espalda.', 'Dificil', 'assets/exercises/front-lever.jpg', 'Front-lever'),
(3, 'Ejercicio estatico en el que solo te sostienes con los brazos.', 'Dificil', 'assets/exercises/full-planche.jpg', 'Full-Planche'),
(1, 'Ejercicio inclinado para los hombros y el core.', 'Intermedio.', 'assets/exercises/pike-push-up.jpg', 'Pike Push-Up'),
(1, 'Ejercicio para pecho y tríceps con los brazos adelantados.', 'Intermedio', 'assets/exercises/pseudo-push-up.jpg', 'Pseudo Push-Up'),
(2, 'Ejercicio de empuje con los brazos y espalda.', 'Intermedio', 'assets/exercises/pike-front-lever-pull-up.jpg', 'Pike Front-lever pull-up'),
(3, 'Ejercicio estatico en barra con los brazos y espalda.', 'Intermedio', 'assets/exercises/pike-front-lever.jpg', 'Pike Front-lever');