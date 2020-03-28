var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 133)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(255, 133, 0)",
    "rgb(255, 0, 133)"
];

var endRound = false

var square = document.querySelectorAll(".square");
var goal = colors[1];
var display = document.querySelector(".display");

display.textContent = goal;

//add intial colors
for(var i = 0; i < square.length; i++){
    square[i].style.backgroundColor = colors[i];
}


//add click listeners
for(var i = 0; i < square.length; i++){
    square[i].addEventListener("click", function(){
        if(!endRound){
        this.classList.add("selected");
        if(this.style.backgroundColor === goal){
            for(var i = 0; i < square.length; i++){
                square[i].style.backgroundColor = goal;
                square[i].classList.remove("selected");
                endRound = true;
            }
        }
    }
    });
}
