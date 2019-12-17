
function Pizza(type,size,crust, topping, number){
this.type = type;
this.size = size;
this.crust = crust;
this.topping= topping;
this.number = number;

}
$(document).ready(function(){
$("#senddata").click(function(event){
var pizzaName = $("#pizza_type :selected").val();
var pizzaSize = $("#pizza_size :selected").val();
var pizzaCrust = $("#pizza_crust :selected").val();
var pizzaTopping = $("pizza_topping :selected").val();
var pizzaCount =$(".number").val();
alert(pizzaName);
event.preventDefault();
});

});


// function getData(){
//     $(docum)
 
//     var pizzaName = parseInt($("#pizza_type: selected").val());
//     var pizzaSize = parseInt($("#pizza_size: selected").val());
//     var pizzaCrust = parseInt($("#pizza_crust: selected").val());
//     var pizzaTopping = parseInt($("pizza_topping: selected").val());
//     var pizzaCount =  parseInt($(".number").val());
//     alert(pizzaName);
//     event.preventDefault();

}
