
let body = document.getElementsByTagName("body")[0];
let container = document.getElementById("container");
let val = document.getElementById("validation");
let tel = document.getElementById("telephone");
let name = document.getElementById("name");
let number = document.getElementById("nombre");



val.addEventListener("click", function() {

   let text_name = name.value.trim();
   let text_tel = tel.value.trim();
   let text_number = number.value.trim();

   if(text_name == "" ||  text_number == "" || text_tel == ""){
    
    return alert("vous devez remplir tous les champs");
    
  }

    else { 
      
      var box = document.createElement("h1");
      var box1 = document.createElement("h2");
      box.innerHTML = "Merci, et à bientôt!";
      box1.innerHTML = "Yona&Mickaël"
      box.setAttribute('class','box');
      box1.setAttribute('class','box1');
      

      remoovDiv();
      return body.append(box,box1);


      };
   
  }) 


function remoovDiv(){

container.remove();

}