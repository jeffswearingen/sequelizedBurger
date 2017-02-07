### seeds

USE burgers_db;

INSERT INTO burgers (burger_name, devoured, date) 
VALUES ("double cheeseburger", 0, CURRENT_TIMESTAMP);

INSERT INTO burgers (burger_name, devoured, date)
VALUES ("whopper", 0, CURRENT_TIMESTAMP);

INSERT INTO burgers (burger_name, devoured, date)
VALUES ("banzai burger", 0, CURRENT_TIMESTAMP);

