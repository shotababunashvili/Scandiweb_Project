<?php


class Products
{
    public $ID, $SKU, $product_name, $price, $typeID;

    /**
     * Products constructor.
     * @param $ID
     * @param $SKU
     * @param $product_name
     * @param $price
     * @param $typeID
     */
    public function __construct($ID, $SKU, $product_name, $price, $typeID)
    {
        $this->ID = $ID;
        $this->SKU = $SKU;
        $this->product_name = $product_name;
        $this->price = $price;
        $this->typeID = $typeID;
    }




}