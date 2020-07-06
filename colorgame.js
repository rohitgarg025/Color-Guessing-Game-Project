var h1 = document.querySelector("h1");

var colors = ["rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 255)"
];

//picks a random color from array
var pickedColor = colors[Math.floor(Math.random()* colors.length)];

var sqaure = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay")
colorDisplay.textContent = pickedColor

for(var i = 0;i<6;i++){
    sqaure[i].style.backgroundColor = colors[i];

    sqaure[i].addEventListener("click",function(){
        if(pickedColor === this.style.backgroundColor){
            messageDisplay.textContent = "Correct";
            changeColors(this.style.backgroundColor);
        }
        else{
            //alert("Wrong");
            this.style.backgroundColor =  "#232323";
            messageDisplay.textContent = "Try Again";

        }
    })
}

function changeColors(color){
    for(var i=0;i<colors.length;i++){

        //change each color to match given color
        sqaure[i].style.backgroundColor = color;
    }
}


