

var btn = document.querySelectorAll("button")[0];
btn.onclick = myFunc;
function myFunc(){
var random1 = Math.ceil(Math.random() * 6);
var random2 = Math.ceil(Math.random() * 6);
var imgdice = document.getElementsByClassName("img1")[0].setAttribute("src" , "dice" + random1 + ".png");
var imgdice = document.getElementsByClassName("img2")[0].setAttribute("src" , "dice" + random2 + ".png");
if(random1 > random2){
    document.querySelectorAll("h2")[0].textContent = "Player 1 Wins";
}else if(random1 < random2){
    document.querySelectorAll("h2")[0].textContent = "Player 2 Wins";
}else{
    document.querySelectorAll("h2")[0].textContent = "Its A Draww";
}


var head = document.querySelector("h1");
