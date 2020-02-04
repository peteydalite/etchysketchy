const container = document.querySelector('.container');

function createGrid(){

    //Outer for loop sets the row
    for(i=0; i<16; i++){

        //create new row with unique class name, css styling
        const row = document.createElement('div');
        row.classList.add(`row${i}`);
        row.setAttribute('style', 'display:flex; flex-direction: row; flex-wrap: wrap; width: 100%');

        //append that row into existing container class in html doc
        container.appendChild(row);

        //create temp variable to point to newly appended row
        const tempRow = document.querySelector(`.row${i}`);
    
        //Inner for loop creates 2 divs; 1. generic column, 2. unique column with css styling
        //appends unique column into generic one which then appends to temprow
        for(k=0; k<16; k++){
            const columnContainer = document.createElement('div');
            columnContainer.classList.add('column');
      
            const column = document.createElement('div');
            column.classList.add(`column${k}`);
            column.setAttribute('style', 'height: 100px');

            columnContainer.appendChild(column);
            tempRow.appendChild(columnContainer);
    }
                                      
  }
}
createGrid();