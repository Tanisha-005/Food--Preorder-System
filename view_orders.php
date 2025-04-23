<?php
include 'db.php';

$result = $conn->query("SELECT * FROM orders");

echo "<h1>All Orders</h1>";
echo "<table border='1' cellpadding='10'>";
echo "<tr><th>Name</th><th>Item</th><th>Time</th><th>Available</th></tr>";

while ($row = $result->fetch_assoc()) {
    echo "<tr>
            <td>{$row['customer_name']}</td>
            <td>{$row['food_item']}</td>
            <td>{$row['time']}</td>
            <td>" . ($row['available'] ? "Yes" : "No") . "</td>
         </tr>";
}
echo "</table>";
?>
