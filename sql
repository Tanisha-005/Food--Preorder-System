CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(100),
    food_item VARCHAR(100),
    available BOOLEAN,
    time VARCHAR(10)
);
