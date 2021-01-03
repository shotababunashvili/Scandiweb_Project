<?php

function buttonElement($btnid, $btntype, $styleclass, $text, $name, $attr){
    $btn = "
       <button name='$name' type='$btntype' '$attr' class='$styleclass' id='$btnid'>$text</button>
    ";
    echo $btn;
}

function inputElement($btnid, $placeholder, $name, $value, $className){
    $ele = "
          <input type=\"text\"  name='$name' id='$btnid' value='$value' autocomplete=\"off\" placeholder='$placeholder' class='$className' >
    ";
    echo $ele;
}

?>