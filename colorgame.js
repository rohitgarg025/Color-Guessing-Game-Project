var h1 = document.querySelector("h1");

var colors = ["rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 255)"
];
var pickedColor = colors[2];

var sqaure = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor

for(var i = 0;i<6;i++){
    sqaure[i].style.backgroundColor = colors[i];

    sqaure[i].addEventListener("click",function(){
        if(pickedColor === this.style.backgroundColor){
            alert("Correct");
        }
        else{
            alert("Wrong");
        }
    })
}


