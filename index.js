let a1=document.getElementById("a1");
let a2=document.getElementById("a2");
let a3=document.getElementById("a3");
let a4=document.getElementById("a4");
let a0=document.getElementById("a0");
if (isNaN(parseInt(a3.value))) 
{a3.value=0;
    }
a1.addEventListener("click",respuestaa1)
function respuestaa1() 
{if (a3.value>0) {
    a3.value=a3.value-1;
}    
}
a2.addEventListener("click",respuestaa2)
function respuestaa2(){
    if (a3.value<99) {
        a3.value=parseInt(a3.value)+parseInt(1);
    }
}
a4.addEventListener("click", respuestaa3)
function respuestaa3() {
    if (parseInt(a3.value)>0) {
        a0.innerHTML=parseInt(a0.innerHTML)+parseInt(1);
    }
  

    
}
