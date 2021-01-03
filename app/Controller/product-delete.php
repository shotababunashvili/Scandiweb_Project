<?php include "../Controller/database.php";


$productTypeIDs = $_POST['productTypeIDs'];
$productIDs = $_POST['productIDs'];

//echo `<pre>`, print_r($productTypeIDs) ,`</pre>`;
//echo `<pre>`, print_r($productIDs) ,`</pre>`;

$helper = "(";
foreach ($productIDs as $item)
    $helper .= $item.", ";

$helper = substr($helper, 0, strlen($helper)-2).")";

$sql = "DELETE FROM `products`
              WHERE `products`.`ID` in ".$helper;

$statement = $statement = $handler->query($sql);

$statement->execute();
//echo $sql."<br>";
//

$helper = "(";
foreach ($productTypeIDs as $item)
      $helper .= $item.", ";

$helper = substr($helper, 0, strlen($helper)-2).")";



$sql = "DELETE FROM `product_types`
              WHERE `product_types`.`ID` in ".$helper;

$statement = $handler->query($sql);

$statement->execute();
//echo $sql."<br>";

echo "Data Has Been Deleted";




