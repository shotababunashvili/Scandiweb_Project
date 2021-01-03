$(document).ready(function () {
    fetchProductList();

    $('#product_list_form').submit(e => {
        e.preventDefault();
        let select = $("#product_list_id option:selected").text();
        console.log("select = %s", select);
        if (select === 'Mass Delete') {
            let productIDs = new Array();
            let productTypeIDs = new Array();


            $('.mybox:checked').each(function () {
                //alert($(this).val());
                //console.log($(this));
                // let elem = $(this)[0].parentElement.parentElement.siblings(":first").text();
                //let elem = $(this).parent().parent().siblings(":first").text();
                //.find("td:first")
                //let elem = $(this)[0].parentElement.parentElement.find( "input" ).html();
                //let elem = $(this).parent().parent().parent().find('.productID').html();
                //let elem = $(this).parent('.util').find('.productID');
                /*
                 let elem = $(this)[0].parentElement;
                 let helper = $(elem).find('.productID').val();
                console.log(helper);

                 */
                let elem = $(this)[0].parentElement;
                productIDs.push($(elem).find('.productID').val());
                productTypeIDs.push($(elem).find('.productTypeID').val());

            });
            // console.log(productTypeIDs);
            // console.log(productIDs);
            if (productTypeIDs.length !== 0 && productIDs.length !== 0) {
                $.ajax({
                    url: '../Controller/product-delete.php',
                    data: {productIDs, productTypeIDs},
                    type: 'POST',
                    success: function (response) {
                        console.log(response);
                        fetchProductList();

                        $('#product_delete_messages').show();
                        setInterval(function () {
                            $('#product_delete_messages').fadeOut();
                        }, 3000);
                    }
                });
            }
        }
    });

    function fetchProductList() {
        $.ajax({
            url: "../Controller/product-show.php",
            type: 'POST',
            success: function (response) {
                // console.log(response);
                let results = JSON.parse(response);
                let template = ``, subElem = ``, colLimit = 4, counter = 1, needCloseTR = false;
                results.forEach(item => {


                    subElem = (counter === 1) ? `<tr>` : '';


                    subElem += `
                          <td>
                          <fieldset style="border: solid 2px;">
                           
                          <div class="form-check ml-1">
                            <input class="form-check-input mybox" type="checkbox" value="" id="defaultCheck1">
                            <label></label>
                            <input type="hidden" class="productID" value="${item.productID}">
                            <input type="hidden" class="productTypeID" value="${item.productTypeID}">
                          </div>
                            <div class="ml-5" id="listbox">
                              
                                <p>${item.SKU}</p>
                                <p>${item.product_name}</p>
                                <p>${item.price} $</p>
                                  
                    `;

                    switch (item.type_name) {
                        case 'DVD-Disc': {

                            subElem += `
                               <p>Size ${item.DVD_mb} MB</p>                            
                           
                         `;
                            break;
                        }

                        case 'Book': {

                            subElem += `                          
                               <p>Weight ${item.book_kg} KG</p>                          
                            `;
                            break;
                        }

                        default: {

                            subElem += `   
                               <p>Dimension:  ${item.furniture_H} X ${item.furniture_W} X ${item.furniture_L} </p>                             
                            `;
                            break;
                        }

                    }

                    subElem += ` </div>
                                </fieldset>
                                </td>
                                `;
                    if (counter === colLimit)
                        subElem += `</tr>`;


                    template += subElem;


                    if (counter === colLimit)
                        counter = 0;

                    counter++;
                });
                //$('#product_list_tbl tr:last').after(template);
                // $('#product_list_tbl > tbody:last-child').append(template);
                //$('#product_list_tbl > tbody:last-child').append(template);
                $('#product_list_tbl tbody').html(template);
            }
        });
    }
});