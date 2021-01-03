<?php include("../Includes/header.php"); ?>

</head>
<body>
<main>
    <div class="container text-center">
        <h1 class="py-4 bg-dark text-light rounded"> <i class="fas fa-swatchbook"></i> Welcome to our site</h1>
        <div class="d-flex justify-content-center">


            <?php buttonElement("btn-viewprod","button", "btn btn-primary btn-lg", "View Product List", "view-list", "dat-toggle='tooltip' data-placement='bottom' title='View Product List' "); ?>
            <?php buttonElement("btn-newprod","button", "btn btn-primary btn-lg", "Create New Product", "create", "dat-toggle='tooltip' data-placement='bottom' title='Create New Product' "); ?>
        </div>
    </div>
</main>
</body>
<?php include("../Includes/footer.php"); ?>


