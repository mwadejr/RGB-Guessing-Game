 var colors = [];
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 133)",
//     "rgb(255, 255, 0)",
//     "rgb(255, 0, 255)",
//     "rgb(255, 133, 0)",
//     "rgb(255, 0, 133)"
// ];

var easy = document.querySelector("#easy");
var medium = document.querySelector("#medium");
var hard = document.querySelector("#hard");

var e = 3;
var m = 6;
var h = 9;

var endRound = false
var square = document.querySelectorAll(".square");
var display = document.querySelector(".display");
var nav = document.querySelector(".head");
var goal = null;
var navLink = document.querySelector(".nav-link.active");
var reset = document.querySelector("#new");
var active = document.querySelectorAll(".highlight")


reset.addEventListener("click", difficulty);


for(var i = 0; i<active.length;i++){
active[i].addEventListener("click", function(){
    for(var i = 0; i<active.length;i++){
        active[i].classList.remove("active");
    }
    this.classList.add("active");
    newRound();
});
}



newRound(h);



function newRound(z)
{
    navLink.style.backgroundColor = "none";
    var pill = document.querySelector(".active");

    for(var i = z; i < 9; i++)
    {
        square[i].classList.add("selected");
    }
    
    for(var i = 0; i < z; i++)
    {
    square[i].classList.remove("selected");
    }
    endRound = false;
    for(var i = 0; i<z; i++){
    colors[i] = "rgb(" + getRandomInt(0, 255)+ ", " + getRandomInt(0, 255) + ", " + getRandomInt(0, 255) + ")";
    }

    goal = colors[getRandomInt(0,z)];
    display.textContent = goal;

    //add intial colors
    for(var i = 0; i < z; i++){
        square[i].style.backgroundColor = colors[i];
    }


    //add click listeners
    for(var i = 0; i < z; i++)
    {
            square[i].addEventListener("click", function()
            {
                if(!endRound)
                {
                    this.classList.add("selected");
                    if(this.style.backgroundColor === goal)
                    {
                        for(var i = 0; i < z; i++)
                        {
                            square[i].style.backgroundColor = goal;
                            square[i].classList.remove("selected");
                            var pill = document.querySelector(".active");
                            nav.style.backgroundColor = goal;
                            pill.style.backgroundColor = goal;
                            endRound = true;
                        }
                        
                    }
                }
            });
    }
}

function difficulty(){
    if(document.querySelector(".active").textContent === "Easy")
    {
        newRound(e);
    }
    else if(document.querySelector(".active").textContent === "Medium")
    {
        newRound(m);
    }
    else
    {
        newRound(h);
    }
}


function match(){
    return;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
