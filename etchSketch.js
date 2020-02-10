const container = document.querySelector('.container');
const defaultGrid = 16;
var gridSize;
var userSize;
var rainbowColor = false;

//Function to display initial grid
let initGrid = function (){
    gridSize = defaultGrid;
    for(i=0; i<(gridSize * gridSize); i++){
        const box = document.createElement('id');
        box.classList.add('box');
        box.classList.add('default')
        var boxSize = (608 / gridSize) + "px";
        container.appendChild(box);
    }
    //Automatically creates grid box sizing box on size of container.
    container.setAttribute('style',
     `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr)`);
}
//function to create custom grid upon selecting reset
let createGrid = function (gridNum){
    if(gridNum == null || gridNum == 0){
        gridSize = 16;
    }else{
        gridSize = gridNum;
    };

    for(i=0; i<(gridSize * gridSize); i++){
        const box = document.createElement('id');
        box.classList.add('box');
        box.classList.add('default')
        var boxSize = (608 / gridSize) + "px";
        container.appendChild(box);
    }
    //Automatically creates box sizeing based on size of container
    container.setAttribute('style',
     `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr)`);
}

//Event listeners for each buttons
const reset = document.querySelector('#reset');
const rainbow = document.querySelector('#color');
const clear = document.querySelector('#clear');

//Clears grid and prompt user for grid size input.
//Container stays the same width and height, boxes are smaller the larger the grid size
reset.addEventListener('click', function(){
    container.innerHTML = "";
    rainbowColor = false;
    userSize = prompt("Please enter grid size:  ")
    createGrid(userSize);
    hov();
});

//turns on and off multicolor depending on click value
rainbow.addEventListener('click', function(){
    if(rainbowColor == false){
        rainbowColor = true;
        console.log('color == true');
        hovColor();
    }else if (rainbowColor == true){
        rainbowColor = false;
        console.log('color == false')
        hov();
    }else{
        rainbowColor == false;
        console.log('color == false');
        hov();
    }
})

//Clears current grid, reloads with previous grid size and hover selection
clear.addEventListener('click', function(){
    container.innerHTML = "";
    createGrid(userSize);
    if(rainbowColor == false){
        hov();
    }else{
        hovColor()
    }
});

//Default Event listener to change box colors
let hov = function(){
    boxHov = document.querySelectorAll('.box');
    boxHov.forEach(item => {
        if(rainbowColor == false){
            item.addEventListener('mouseover', function(){
                //item.classList.add('defaultHov');
                item.style.backgroundColor = 'orange';
            });
        }
    });
};

//Event listener to allow for multicolor background on box hover
let hovColor = function(){
    var boxes = document.querySelectorAll('.box');
    boxes.forEach(boxColor => {
        if(rainbowColor == true){
            boxColor.addEventListener('mouseover',function(){
                var r = Math.floor(Math.random() * 255);
                var g = Math.floor(Math.random() * 255);
                var b = Math.floor(Math.random() * 255);
                boxColor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            })
        }else{
            boxColor.style.backgroundColor = 'rgb(236, 236, 236);';
        };
    });
};
//Initialize run
let init = function(){
    initGrid();
    hov();
};
init();
