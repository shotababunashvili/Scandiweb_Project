<?php include("../Includes/header.php"); ?>

    </head>
    <body>
    <main>

        <form action="" method="post" id="product_add">
            <div class="alert alert-primary" id="register_messages" role="alert" style="display: none">
                The data has been saved!!!
            </div>

            <div id="productAddHeader" class="ml-5 mt-4 mb-5">
                <div class="row">
                    <div class="col-md-6">
                        <h1>Product Add</h1>
                    </div>
                    <div class="col-md-6">
                          <?php buttonElement("save_product_id","submit","btn btn-success btn-lg float-right mr-5 px-5","Save","save_product",""); ?>
                    </div>
                </div>

                <hr class="mr-5 mb-5">
            </div>

            <div class="row my-3">
                <div class="col-md-1 text-right">
                    <label for="SKU_id">SKU</label>
                </div>
                <div class="col-md-2">
                    <?php inputElement("SKU_id", "Enter Product SKU", "sku", "", "form-control"); ?>
                </div>

                <div class="col-md-2" id="SKU_messages">

                </div>
            </div>

            <div class="row my-3">
                <div class="col-md-1 text-right ">
                    <label for="product_name_id">Name</label>
                </div>
                <div class="col-md-2">
                    <?php inputElement("product_name_id", "Enter Product Name", "product_name", "", "form-control"); ?>
                </div>
                <div class="col-md-2" id="product_name_messages">

                </div>
            </div>

            <div class="row my-3">
                <div class="col-md-1 text-right ">
                    <label for="product_price_id">Price</label>
                </div>
                <div class="col-md-2">
                    <?php inputElement("product_price_id", "Enter Product Price", "product_price", "", "form-control"); ?>
                </div>
                <div class="col-md-2" id="product_price_messages">

                </div>
            </div>

            <div class="row my-3">
                <div class="col-md-2 text-right ">
                    <select name="product_type" id="product_type_id" class="mt-5">
                            <option value="-1" >Select Product Type</option>
                            <option value="DVD-Disc" >DVD-Disc</option>
                            <option value="Book" >Book</option>
                            <option value="Furniture" >Furniture</option>
                    </select>
                </div>
            </div>


            <div class="row my-3">
                <div id="product_type_messages" class="col-md-4">
                   <!-- <p class="text-center text-danger ">Please Select Option From The List</p> -->
                </div>
            </div>

            <div id="subform">
            </div>
        </form>
    </main>
    </body>

<?php include("../Includes/footer.php"); ?>