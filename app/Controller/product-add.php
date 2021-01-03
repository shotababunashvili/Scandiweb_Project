<?php include("../Controller/database.php");
include("../Model/Product_types.php");
include("../Model/Products.php");
/*
$SKU = $_POST['SKU'];
$product_name = $_POST['product_name'];
$product_price = $_POST['price'];

echo "
    inside backend 
    SKU : {$SKU}
    product_name: {$product_name}
    product_price: {$product_price}

";
*/
// create class Product_type object
$prodTypeOBJ = new Product_types(null, $_POST['type_name'], (int)$_POST['DVD_mb'],
    (int)$_POST['book_kg'], (int)$_POST['furniture_H'], (int)$_POST['furniture_W'], (int)$_POST['furniture_L']);

//testing purposes
 echo "inside product-add.php";
 echo "type_name: ", $prodTypeOBJ->type_name, "\n";
 echo "DVD_mb: ", $prodTypeOBJ->DVD_mb, "\n";
 echo "book_kg: ", $prodTypeOBJ->book_kg, "\n";
 echo "furniture_H: ", $prodTypeOBJ->furniture_H, "\n";
 echo "furniture_W: ", $prodTypeOBJ->furniture_W, "\n";
 echo "furniture_L: ", $prodTypeOBJ->furniture_L, "\n";
//

$prodOBJ = new Products(null, $_POST['SKU'], $_POST['product_name'], (float)$_POST['price'], null);
/*
$query = 'INSERT INTO `product_types`(`type_name`, `DVD_mb`, `book_kg`, `furniture_H`, `furniture_W`, `furniture_L`)
                                    VALUES(:type_name, :DVD_mb, :book_kg, :furniture_H, :furniture_W, :furniture_L)';

$statement = $handler->prepare($query,array(
    ':type_name'=>$prodTypeOBJ.type_name,
    ':DVD_mb' => $prodTypeOBJ.DVD_mb,
    ':book_kg'=> $prodTypeOBJ.book_kg,
    ':furniture_H' => $prodTypeOBJ.furniture_H,
    ':furniture_w' => $prodTypeOBJ.furniture_w,
    ':furniture_L' => $prodTypeOBJ.furniture_L,
  ));

$statement->execute();
*/
// $handler->lastInsertId();
$statement = $handler->prepare("INSERT INTO `product_types`(`type_name`, `DVD_mb`, `book_kg`, `furniture_H`, `furniture_W`, `furniture_L`)
                                    VALUES(:type_name, :DVD_mb, :book_kg, :furniture_H, :furniture_W, :furniture_L)");

$statement -> bindParam(':type_name',$prodTypeOBJ->type_name);
$statement -> bindParam(':DVD_mb',$prodTypeOBJ->DVD_mb);
$statement -> bindParam(':book_kg',$prodTypeOBJ->book_kg);
$statement -> bindParam(':furniture_H',$prodTypeOBJ->furniture_H);
$statement -> bindParam(':furniture_W',$prodTypeOBJ->furniture_W);
$statement -> bindParam(':furniture_L',$prodTypeOBJ->furniture_L);

$statement ->execute();


$prodOBJ->typeID = $handler->lastInsertId();
//**
 echo "typeID = ", $prodOBJ->typeID, "\n";

//***

$statement = $handler->prepare("INSERT INTO `products` (`SKU`, `product_name`, `price`, `typeID`) 
                                                            VALUES(:SKU, :product_name, :price, :typeID)");

$statement -> bindParam(':SKU',$prodOBJ->SKU);
$statement -> bindParam(':product_name',$prodOBJ->product_name);
$statement -> bindParam(':price',$prodOBJ->price);
$statement -> bindParam(':typeID',$prodOBJ->typeID);

$statement->execute();

echo "Data Inserted Successfully";



