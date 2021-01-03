<?php


class Product_types
{
    public $ID, $type_name, $DVD_mb, $book_kg, $furniture_H, $furniture_W, $furniture_L;

    /**
     * Product_types constructor.
     * @param $ID
     * @param $type_name
     * @param $DVD_mb
     * @param $book_kg
     * @param $furniture_H
     * @param $furniture_W
     * @param $furniture_L
     */
    public function __construct($ID, $type_name, $DVD_mb, $book_kg, $furniture_H, $furniture_W, $furniture_L)
    {
        $this->ID = $ID;
        $this->type_name = $type_name;
        $this->DVD_mb = $DVD_mb;
        $this->book_kg = $book_kg;
        $this->furniture_H = $furniture_H;
        $this->furniture_W = $furniture_W;
        $this->furniture_L = $furniture_L;
    }
}