
function Pizza(type,size,crust, topping, number){
this.type = type;
this.size = size;
this.crust = crust;
this.topping= topping;
this.number = number;

}
$(document).ready(function() {
  $("form #pizzas").submit(function() {
    alert("hello");
  });
});
 function getdata(){
     alert("Hello");
 }