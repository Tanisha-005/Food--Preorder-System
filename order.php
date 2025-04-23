<?php
include 'db.php';

$name = $_POST['customer_name'];
$item = $_POST['food_item'];
$time = $_POST['time'];

// Check availability (for demo, all items available)
$available = true;

$sql = "INSERT INTO orders (customer_name, food_item, available, time) 
        VALUES ('$name', '$item', $available, '$time')";

if ($conn->query($sql) === TRUE) {
    echo "Order placed! <a href='index.html'>Back</a>";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
