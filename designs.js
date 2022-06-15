const click = document.getElementByID('sizePicker')
const color = document.getElementByID('colorPicker')
const grid = document.getElementByID('pixelCanvas')
const height = documetn.getElementByID('inputHeight')
const width = document.getElementByID('inputWidth')


// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid(){
if(table.innerHTML !== ""){
    table.innerHTML=""
}

    for(let i = 0; i <gridWidth; i++){
        let gridRow = document.createElement('tr');
    for (let j= 1;j<height; j++){

        let gridCell = document.createElement('td');
        gridRow.appendChild(gridCell);
        gridCell.addEventListener('hover', function(e) {
            const color = document.querySelector('.color-picker').value;
            this.style.backgroundColor = color;
    })
    }
    gridRow.append(gridCell)
    table.append(gridRow)
}

}
    
    // submit button
    click.addeventListener("submit", function(event){
        event.preventDefault();
        makeGrid();
    })

