let form = document.querySelector("form");
let inputs = document.querySelectorAll("input")
let main = document.querySelector(".main")


form.addEventListener("submit",function(val){
     val.preventDefault();
     
     let card = document.createElement("div");
     card.classList.add("card");

     let image = document.createElement("div");
     image.classList.add("imgs");

     let img = document.createElement("img");
     img.setAttribute("src",inputs[3].value);

     let h4 = document.createElement("h4");
     h4.textContent = inputs[0].value;
     
     let h5 = document.createElement("h5");
     h5.textContent = inputs[1].value;
     
     let p = document.createElement("p");
     p.textContent=inputs[2].value;

     image.appendChild(img);
     card.appendChild(image);

     card.appendChild(h4);
     card.appendChild(h5);
     card.appendChild(p);


     main.appendChild(card);

     inputs.forEach(function(inpppp){
          if(inpppp.type !== "submit"){
     inpppp.value="";
          }
     })
});
