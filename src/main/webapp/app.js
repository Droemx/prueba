/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */

$(document).ready(function (){
    $("button").click(function (){
        $.get("datos.json", function (dato, status, xhr)
        {
            console.log(dato);
        });
    });
});
