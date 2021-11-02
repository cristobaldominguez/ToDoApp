-- psql -d todo_app -a -f db/seed/todos.sql

INSERT INTO todos(content, done) VALUES ('Comer 2 uvas por cada mes del año y pedir un deseo por cada una', false),
                                  ('Comer lentejas', false),
                                  ('Dar una vuelta a la manzana con una maleta', true),
                                  ('Llenar los saleros de la casa', false),
                                  ('Colocar un ajo en la billetera para que no falte el dinero', false),
                                  ('Utilizar ropa interior amarilla para atraer la buena suerte', true),
                                  ('Que el abrazo de año nuevo sea con alguien del sexo opuesto', true),
                                  ('Escribir en un papel todos los deseos y quemarlos pasada las 12:00', false),
                                  ('Abrir las ventanas para dejar que todo lo malo se vaya', false),
                                  ('Utilizar ropa de color blanco para alejar enfermedades', true);
