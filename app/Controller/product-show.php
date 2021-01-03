<?php include("../Controller/database.php");
include ("../Model/Entry.php");

$sql = "SELECT  `products`.`ID` as productID,
		`SKU`,
        `product_name`,
        `price`,
        `product_types`.`ID` as productTypeID,
        `type_name`,
        `DVD_mb`,
        `book_kg`,
        `furniture_H`,
        `furniture_W`,
        `furniture_L`
FROM `products`
 inner join `product_types` on `products`.`typeID` = `product_types`.`ID`;
";
$statement = $handler->query($sql);

$statement -> setFetchMode(PDO::FETCH_CLASS, 'Entry');

$result = array();
while ($row = $statement->fetch())
    array_push($result, $row);

$jsonsString = json_encode($result);
echo $jsonsString;