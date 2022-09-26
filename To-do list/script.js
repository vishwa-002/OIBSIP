var addToBot=document.querySelector(".btn")
let addToBar=document.querySelector(".bar")
let addToCon=document.querySelector(".content-2")

addToBot.addEventListener('click',function(){
    var list=document.createElement("p");
    addToCon.appendChild(list);
    list.innerText=addToBar.value;
    list.classList.add('todoe1');
    addToBar.value="";
list.addEventListener('click',function(){
        list.style.textDecoration="line-through";})
list.addEventListener('dblclick',function(){
      addToCon.removeChild(list);}) 
})  
