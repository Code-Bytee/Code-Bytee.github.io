function ry(){
let A = document.getElementById("Perpendicular").value ;
let B = document.getElementById("Base").value;

 var C = Math.pow(A,2);
 var D = Math.pow(B,2);
 var E = (C+D);
 var F = Math.sqrt(E);
 var G = Math.round(F);
  document.getElementById("ans").value = G ;
}
function clean(){
    document.getElementById("Perpendicular").value = '';
    document.getElementById("Base").value = "" ;
    document.getElementById("ans").value = "" ;
}

function ans1(){
    
    
    
    var Z = document.getElementById("hypotenuse").value;
    var Y = document.getElementById("Side2").value;
    var X = Math.pow(Z,2);
    var W = Math.pow(Y,2);
    var V = (X - W);
    var T = Math.sqrt(V);
    var S = Math.round(T);    
   if (S)
   {
       document.getElementById("ans1").value = S
       
   }
   else{
       document.getElementById("ans1").value = "Input Error"
   }
        
    
    
    
    
    
}
    

function clean2(){
    document.getElementById("hypotenuse").value = "" ;
    document.getElementById("Side2").value = "" ;
    document.getElementById("ans1").value = "" ;
} 



function change1(){
    document.body.style.background = "#3385ff"
    document.body.style.color = "#ffff99"
}
function change2(){
    document.body.style.background = "#a366ff"
}
function change3(){
    document.body.style.background = "rgb(170, 105, 0)"    
}
function change4(){
    document.body.style.background = "#7eedd9"
    document.body.style.color = "black"
}
function change5(){
    document.body.style.background = "#af0000"
    document.body.style.color = "white"
}
