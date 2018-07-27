CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
    itemId INT AUTO_INCREMENT NOT NULL,
    productName VARCHAR(45) NOT NULL,
    departmentName VARCHAR(45) NOT NULL,
    price DECIMAL(10,4) NOT NULL,
    stockQuantity INT(10) NOT NULL,
    PRIMARY KEY(itemId)
);

INSERT INTO  products(productName, departmentName, price, stockQuantity)
VALUES ("The Last of Us", "Video Games", 29.99, 50),
    ("Ace Combat 6", "Video Games", 39.99, 10),
    ("Call of Duty", "Video Games", 19.99, 100),
    ("My Little Pony", "Toys", 79.99, 70),
    ("T-shirt", "Clothing", 9.99, 30),
    ("Play-Doh", "Toys", 5.99, 50),
    ("Keyboard", "PC Accessories", 19.99, 60);
    ("Skirt", "Clothing", 20.99, 30),
    ("Robot", "Toys", 105.99, 50),
    ("Chair", "Furniture", 59.99, 40);

SELECT * FROM bamazon.products;