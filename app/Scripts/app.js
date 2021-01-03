$(document).ready(function () {
    console.log("ready!");
    //redirections
    $("#btn-newprod").click(function () {
        window.location.href = 'http://localhost/Scandiweb/app/View/registerProduct.php';
    });

    $("#btn-viewprod").click(function () {
        window.location.href = 'http://localhost/Scandiweb/app/View/listProduct.php';
    });


    //*******************************
    $('select[name="product_type"]').change(function () {

        /*if ($(this).val() == "2"){
            alert("call the do something function on option 2");
        }*/
        //alert("selectedItem = " + $(this).val());
        let switch_type = $(this).val();
        let template = '';

        switch (switch_type) {
            case 'DVD-Disc': {
                template += `
                    <div class="row my-3">
                         <div class="col-md-1 text-right">
                             <label for="DVD_mb_id">Size</label>
                         </div>
                         <div class="col-md-2">
                             <input type= "text"  name="DVD_mb" id="DVD_mb_id" value="" autocomplete= "off" placeholder= "Enter DVD Size" class="form-control" >
                         </div>
                         <div class="col-md-2" id="DVD_mb_messages">
                    
                        </div>
                    </div>
                    
                     <div class="row my-3">
                         <div class="col-md-4">
                            <p class="text-center">Please Provide DVD's Size In The Form Above</p>
                         </div>
                    </div>     
                `;

                $('#product_type_messages').html(``);
                break;
            }
            case 'Book': {
                template += `
                     <div class="row my-3">
                         <div class="col-md-1 text-right">
                             <label for="book_kg_id">Weight</label>
                         </div>
                         <div class="col-md-2">
                             <input type= "text"  name="book_kg" id="book_kg_id" value="" autocomplete= "off" placeholder= "Enter Book Weight" class="form-control" >
                         </div>
                         <div class="col-md-2" id="book_kg_messages">
                    
                         </div>
                    </div>
                    
                     <div class="row my-3">
                         <div class="col-md-4">
                            <p class="text-center">Please Provide Book's Weight In The Form Above</p>
                         </div>
                    </div> 
                `;
                $('#product_type_messages').html(``);
                break;
            }
            case 'Furniture': {
                template += `
                     <div class="row my-3">
                         <div class="col-md-1 text-right">
                             <label for="furniture_H_id">Height</label>
                         </div>
                         <div class="col-md-2">
                             <input type= "text"  name="furniture_H" id="furniture_H_id" value="" autocomplete= "off" placeholder= "Enter Furniture Height" class="form-control" >
                         </div>
                         
                         <div class="col-md-2" id="furniture_H_messages">
                    
                        </div>
                    </div>
                    
                    <div class="row my-3">
                         <div class="col-md-1 text-right">
                             <label for="furniture_W_id">Width</label>
                         </div>
                         <div class="col-md-2">
                             <input type= "text"  name="furniture_W" id="furniture_W_id" value="" autocomplete= "off" placeholder= "Enter Furniture Width" class="form-control" >
                         </div>
                         <div class="col-md-2" id="furniture_W_messages">
                    
                        </div>
                    </div>
                    
                    <div class="row my-3">
                         <div class="col-md-1 text-right">
                             <label for="furniture_L_id">Length</label>
                         </div>
                         <div class="col-md-2">
                             <input type= "text"  name="furniture_L" id="furniture_L_id" value="" autocomplete= "off" placeholder= "Enter Furniture Length" class="form-control" >
                         </div>
                         <div class="col-md-2" id="furniture_L_messages">
                    
                        </div>
                    </div> 
                    
                     <div class="row my-3">
                         <div class="col-md-4">
                            <p class="text-center">Please Provide Furniture's Dimensions In The Form Above</p>
                         </div>
                    </div> 
                `;
                $('#product_type_messages').html(``);
                break;
            }
            default : {
                $('#product_type_messages').html(`<p class="text-center text-danger ">Please Select Option From The List</p>`);
                break;
            }
        }

        $("#subform").html(template);

    });

    //************************************************************
    function valid(input) {
        return typeof input !== "undefined" && input !== null && input.length !== 0 && input;
    }

    function isNumber(n) {
        return !isNaN(parseFloat(n)) && !isNaN(n - 0);
    }

    function cstTrim(text) {
        return valid(text) ? text.trim() : null;
    }

    //******************************
    function validateProductForm(SKU, product_name, price, type_name, DVD_mb, book_kg, furniture_H, furniture_W, furniture_L) {
        let others = valid(SKU) && valid(product_name) && valid(price) && isNumber(price) && type_name !== '-1';
        let isDVD = false, isBook = false, isFurniture = false;

        if (type_name === "DVD-Disc") {
            isDVD = valid(DVD_mb) && isNumber(DVD_mb);
            isBook = true;
            isFurniture = true;
        } else if (type_name === "Book") {
            isBook = valid(book_kg) && isNumber(book_kg);
            isDVD = true;
            isFurniture = true;
        } else {
            isFurniture = valid(furniture_H) && valid(furniture_L) && valid(furniture_W) && isNumber(furniture_H) && isNumber(furniture_L) && isNumber(furniture_W);
            isDVD = true;
            isBook = true;
        }
        // add error messages if input is invalid
        if (!others) {
            if (!valid(SKU))
                $('#SKU_messages').html('<p class="text-danger">*Please Enter SKU</p>');
            if (!valid(product_name))
                $('#product_name_messages').html('<p class="text-danger">*Please Enter Product Name </p>');
            if (!valid(price))
                $('#product_price_messages').html('<p class="text-danger">*Please Enter Product Price</p>');
            else if (!isNumber(price))
                $('#product_price_messages').html('<p class="text-danger">*Please Enter Valid Price (integers only)</p>');
            if (type_name === '-1')
                $('#product_type_messages').html(`<p class="text-center text-danger ">*Please Select Option From The List</p>`);
        }

        if (!isDVD) {
            if (!valid(DVD_mb))
                $('#DVD_mb_messages').html('<p class="text-danger">*Please Enter size</p>');
            else if (!isNumber(DVD_mb))
                $('#DVD_mb_messages').html('<p class="text-danger">*Please Enter Valid Value</p>');
        }

        if (!isBook) {
            if (!valid(book_kg))
                $('#book_kg_messages').html('<p class="text-danger">*Please Enter Weight</p>');
            else if (!isNumber(book_kg))
                $('#book_kg_messages').html('<p class="text-danger">*Please Enter Valid Value</p>');
        }

        if (!isFurniture) {
            if (!valid(furniture_H))
                $('#furniture_H_messages').html('<p class="text-danger">*Please Enter Height</p>');
            else if (!isNumber(furniture_H))
                $('#furniture_H_messages').html('<p class="text-danger">*Please Enter Valid Value</p>');
            if (!valid(furniture_W))
                $('#furniture_W_messages').html('<p class="text-danger">*Please Enter Width</p>');
            else if (!isNumber(furniture_W))
                $('#furniture_W_messages').html('<p class="text-danger">*Please Enter Valid Value</p>');
            if (!valid(furniture_L))
                $('#furniture_L_messages').html('<p class="text-danger">*Please Enter Length</p>');
            else if (!isNumber(furniture_L))
                $('#furniture_L_messages').html('<p class="text-danger">*Please Enter Valid Value</p>');
        }

        //empty messages
        if (valid(SKU))
            $('#SKU_messages').html(``);
        if (valid(product_name))
            $('#product_name_messages').html(``);
        if (valid(price) && isNumber(price))
            $('#product_price_messages').html(``);
        if (valid(DVD_mb) && isNumber(DVD_mb))
            $('#DVD_mb_messages').html(``);
        if (valid(book_kg) && isNumber(book_kg))
            $('#book_kg_messages').html(``);
        if (valid(furniture_H) && isNumber(furniture_H))
            $('#furniture_H_messages').html(``);
        if (valid(furniture_W) && isNumber(furniture_W))
            $('#furniture_W_messages').html(``);
        if (valid(furniture_L) && isNumber(furniture_L))
            $('#furniture_L_messages').html(``);
        // HOMEWORK
        //Homework finish
        // end error messages

        //testing purposes
        /*
        console.log("inside validateProductForm ");
        console.log("others: " + others);
        console.log("isDVD: " + isDVD);
        console.log("isBook: " + isBook);
        console.log("isFurniture: " + isFurniture);
        */
        return others && isDVD && isBook && isFurniture;
    }

    //********************************************************
    $('#product_add').submit(e => {
        e.preventDefault();
        const productData = {
            SKU: cstTrim($('#SKU_id').val()),
            product_name: cstTrim($('#product_name_id').val()),
            price: cstTrim($('#product_price_id').val()),
            type_name: cstTrim($("#product_type_id option:selected").val()),
            DVD_mb: cstTrim($("#DVD_mb_id").val()),
            book_kg: cstTrim($("#book_kg_id").val()),
            furniture_H: cstTrim($("#furniture_H_id").val()),
            furniture_W: cstTrim($("#furniture_W_id").val()),
            furniture_L: cstTrim($("#furniture_L_id").val())
        };
        if (validateProductForm(productData.SKU, productData.product_name, productData.price, productData.type_name, productData.DVD_mb, productData.book_kg,
            productData.furniture_H, productData.furniture_W, productData.furniture_L)) {


            $.post("../Controller/product-add.php", productData, (response) => {
                console.log(response);
                $('#product_add').trigger('reset');
                $("#subform").html(``);

                //register_messages
                $('#register_messages').show();
                setInterval(function(){
                    $('#register_messages').fadeOut();
                    }, 3000);


            });
        }
    });
//************************************************************************************************************************************




});