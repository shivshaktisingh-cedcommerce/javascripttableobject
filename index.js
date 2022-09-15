
var z =[
    {id:101,name:"PRODUCT1 " , price:200 , quantity:1} , 
    {id:102,name:"PRODUCT2 " , price:300 , quantity:1}

]
function add(event){
    event.preventDefault();
    z.push({id:event.target.pro_id.value , name:"PRODUCT "+event.target.pro_name.value , price:event.target.pro_price.value  , quantity:1})
    event.target.pro_id.value="";
    event.target.pro_name.value="";
    event.target.pro_price.value="";
   display();
}
function display(){
    var txt = "<table>"
    for(let i = 0 ; i < z.length ; i++){
        console.log(z[0])
        txt+="<tr><td>"+z[i].id+"</td><td>"+z[i].name+"</td><td>"+z[i].price+"</td><td>"+z[i].quantity+"</td><td><button id="+i+" onclick='editfun(id)'>EDIT</button></td><td><button id="+i+" onclick='deletefun(id)'>DELETE</button></td></tr>";
    }
    txt += "</table>"
    document.getElementById("result").innerHTML=txt;
}
function deletefun(d){
    z.splice(d , 1)
    display();
}
function editfun(d){
   let quant = window.prompt("UPDATE QUANTITY")
   if(quant===null){

   }
   else{
    z[d].quantity = quant;
   }
   
   display();

}
