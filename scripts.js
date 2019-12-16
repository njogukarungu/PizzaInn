var formData = document.forms[0];

function Pizza(size, crust, topping, number) {
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.number = number;
}
$(document).ready(function() {
  // $("select.size1").change(function(){
  //     var sizeSelected = $(this).children("Option: seleceted").val();
  //     alert(sizeSelected);
});
var pizzaSize = $("#size :selected").val();
var crust = $("#crust :selected").val();
var topping = $("#topping :selected").val();
var pizzaCount = $("#number option:selected").val();



function getData() {
var pizzaSize = $("#size :selected").val();
var crust = $("#crust :selected").val();
var topping = $("#topping :selected").val();
var pizzaCount = $("#number option:selected").val();
alert(pizzaSize);
alert(crust);
alert(topping);
alert(pizzaCount);




  var pizzaSize1 = $("#size1 :selected").val();
  var crust11 = $("#crust1 :selected").val();
  var topping1 = $("#topping1 :selected").val();
  var pizzaCount1 = $("#number1 option:selected").val();

    var pizzaSize2 = $("#size2 :selected").val();
    var crust2 = $("#crust2 :selected").val();
    var topping2 = $("#topping2 :selected").val();
    var pizzaCount2 = $("#number2 option:selected").val();

      var pizzaSize3 = $("#size3 :selected").val();
      var crust3 = $("#crust3 :selected").val();
      var topping3 = $("#topping3 :selected").val();
      var pizzaCount3 = $("#number3 option:selected").val();

      var pizzaSize4 = $("#size4 :selected").val();
      var crust4 = $("#crust4 :selected").val();
      var topping4 = $("#topping4 :selected").val();
      var pizzaCount4 = $("#number4 option:selected").val();

      var pizzaSize5 = $("#size5 :selected").val();
      var crust5 = $("#crust5 :selected").val();
      var topping5 = $("#topping5 :selected").val();
      var pizzaCount5 = $("#number5 option:selected").val();

      var pizzaSize6 = $("#size6 :selected").val();
      var crust6 = $("#crust6 :selected").val();
      var topping6 = $("#topping6 :selected").val();
      var pizzaCount6 = $("#number6 option:selected").val();

      var pizzaSize7 = $("#size7 :selected").val();
      var crust7 = $("#crust7 :selected").val();
      var topping7 = $("#topping7 :selected").val();
      var pizzaCount7 = $("#number7 option:selected").val();

      var pizzaSize8 = $("#size8 :selected").val();
      var crust8 = $("#crust8 :selected").val();
      var topping8 = $("#topping8 :selected").val();
      var pizzaCount8 = $("#number8 option:selected").val();
  



}
