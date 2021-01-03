<?php include("../Includes/header.php"); ?>
    <script type="text/javascript" src="../Scripts/product-list.js"></script>
    </head>

    <body>
    <main>
        <form method="post" id="product_list_form">
            <div class="alert alert-primary" id="product_delete_messages" role="alert" style="display:none;">
                Data has been deleted successfully ! 
            </div>
            <div id="productListHeader" class="ml-5 mt-4 mb-5">
                <div class="row">
                    <div class="col-md-6">
                        <h1>Product List</h1>
                    </div>

                    <div class="col-md-6">
                        <?php buttonElement("List_product_id", "submit", "btn btn-success btn-lg float-right mr-5 px-5", "Apply", "", ""); ?>
                        <select class="listSelect" id="product_list_id" style="margin-right: 12px">
                            <option value="action">Select Action</option>
                            <option value="massDel">Mass Delete</option>
                        </select>
                    </div>


                </div>
                <hr class="mr-5 mb-5">
            </div>

            <div class="container col-10">
                <table id="product_list_tbl" class="table">
                    <tbody>

                    </tbody>
                </table>
            </div>
        </form>
    </main>
    </body>
<?php include("../Includes/footer.php"); ?>