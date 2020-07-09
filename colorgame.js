var h1 = document.querySelector("h1");

// var colors = ["rgb(255, 0, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(255, 0, 255)"
// ];

var colors = generateRandomColors(6);

//picks a random color from array
var pickedColor = colors[Math.floor(Math.random()* colors.length)];

var sqaure = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay")
colorDisplay.textContent = pickedColor
var h1 = document.querySelector("h1");

//New colors button

var reset = document.getElementById("reset");

var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

//EVENTS
// ****************************************




//New colors events

reset.addEventListener("click",function(){
    if(reset.textContent == "Play Again"){
        reset.textContent = "New Colors";
    }
   
    //gen new colors;
   colors = generateRandomColors(6);

   //new correct color
   pickedColor =  colors[Math.floor(Math.random()* colors.length)];
    //change color display

    colorDisplay.textContent = pickedColor;
    //reflect colors
   
    for(var i=0;i<colors.length;i++){
        sqaure[i].style.backgroundColor = colors[i];    
    }

    h1.style.backgroundColor = "#232323";
});


//Easy Button

easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");

    //generate new color array
    colors = generateRandomColors(3);

    //picked color
    pickedColor =  colors[Math.floor(Math.random()* colors.length)];
  
    //Display picked color
    colorDisplay.textContent = pickedColor;

    for(var i=0;i<sqaure.length;i++){
        if(colors[i]){
            sqaure[i].style.backgroundColor = colors[i];
        }
        else{
            sqaure[i].style.display = "none";
        }
    }


});

//Hard Button

hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");


        //generate new color array
        colors = generateRandomColors(6);

        //picked color
        pickedColor =  colors[Math.floor(Math.random()* colors.length)];
      
        //Display picked color
        colorDisplay.textContent = pickedColor;
    
        for(var i=0;i<sqaure.length;i++){
            
                sqaure[i].style.backgroundColor = colors[i];
            
            
                sqaure[i].style.display = "block";
            
        }
});




for(var i = 0;i<6;i++){
    sqaure[i].style.backgroundColor = colors[i];

    sqaure[i].addEventListener("click",function(){
        if(pickedColor === this.style.backgroundColor){
            messageDisplay.textContent = "Correct";
            changeColors(this.style.backgroundColor);
            h1.style.backgroundColor = pickedColor;

            //if win..change new colors to play again
            reset.textContent = "Play Again";
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

function generateRandomColors(num){
    var arr = [];

    //num times 
    for(var i =0;i<num;i++){
//get random color and push into arr
        arr.push(randomColor());
    }
    return arr;
}


function randomColor(){
    var r = Math.floor(Math.random() * 256 );
    var g = Math.floor(Math.random() * 256 );
    var b = Math.floor(Math.random() * 256 );

    return "rgb(" + r + ", " + g + ", " + b + ")";
}