// Select color input
const sizePicker = document.querySelector('.size-picker');
const pixelCanvas = document.querySelector('.pixel-canvas');
const quickFill = document.querySelector('.quick-fill');
const eraseMode = document.querySelector('.erase-mode');
const drawMode = document.querySelector('.draw-mode');
// Select size input
var height, width, color;
// When size is submitted by the user, call makeGrid()

// I was told to add comments to explain the code because I have no way for updating this. 
//This function is put in place before the submit button. These are the two boxes you would put the height and width in.
//This creates a grid.
$(`#sizePicker`).submit(function (event) {
    event.preventDefault();
    height = $(`#inputHeight`).val();
    width = $(`#inputWidth`).val();
    makeGrid(height, width);
})

//This is what would be shown when you are adding or subtrating a color. This would be how you draw the picture in the pixel
function makeGrid(x, y) {
    $(`tr`).remove();

    for (var i = 1; i <= x; i++){
        $(`#pixelCanvas`).append(`<tr id=table` + 1 + `></tr>`);
        for (var j = 1; j <=y; j++ ){
            $(`#table` + i).append(`<td></td`);
        }
    }
//So you want a splash of color huh?
//This is how you are styling your colors for the picture list
$(`td`).click(function addColor(){
    color = $(`#colorPicker`).val();

    if($(this).attr(`style`)){
        $(this).removeAttr(`style`)
    } else{
        $(this).attr(`style`, `background-color:` + color);
    }
})

}



