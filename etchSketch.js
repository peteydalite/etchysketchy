const container = document.querySelector('.container');
const defaultGrid = 16;
var gridSize;
var rainbowColor = false;

//Function to display grid
let createGrid = function (){
    gridSize = defaultGrid;
    for(i=0; i<(gridSize * gridSize); i++){
        const box = document.createElement('id');
        box.classList.add('box');
        box.classList.add('default')
        var boxSize = (608 / gridSize) + "px";
        //box.setAttribute('style', `width: ${boxSize}; height: ${boxSize};`);
        box.style.width = `${boxSize}`;
        box.style.height = `${boxSize}`;
        container.appendChild(box);
    }
    container.setAttribute('style', `grid-template-columns: repeat(${gridSize}, 1fr);`);
}

//Event listener for reset button to clear grid
const reset = document.querySelector('#reset');
const rainbow = document.querySelector('#color');

reset.addEventListener('click', function(){
    container.innerHTML = "";
    rainbowColor = false;
    createGrid();
    hov();
});
rainbow.addEventListener('click', function(){
    rainbowColor = true;
    console.log('color == true');
    hovColor();
})
//Event listener to change box colors
let hov = function(){
    boxHov = document.querySelectorAll('.box');
    boxHov.forEach(item => {
        if(rainbowColor == false){
            item.addEventListener('mouseover', function(){
                item.classList.add('defaultHov');
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
        };
    });
};
//Initialize run
let init = function(){
    createGrid();
    hov();
};
init();
