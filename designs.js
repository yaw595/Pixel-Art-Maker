// Select color input

// Select size input
var height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    makeGrid(height, width);

    // Log the code to console to make sure it works
    //console.log('Heitht: ' + height + ' Width: ' + width);
})

function makeGrid(x, y) {
    $('tr').remove();

    // Your code goes here!
    //TODO: Create rows and columns using nested loops

    for (var i = 1; i <= x; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>'); //Columns
        for (var j = 1; j <= y; j++) {
            $('#table' + i).append('<td></td>'); // Rows
            $('#canvas').css('box-shadow', '0 5px 10px -2px rgba(0, 0, 0, 0.5)'); // Adding a shadow to the canvas background
        }
    }

    //TODO: Apply pixel color
    $('td').click(function pixColor() {
        color = $('#colorPicker').val();

        if ($(this).attr('style')) { //Check if the grid cell has a style attribute
            $(this).removeAttr('style'); //Remove the *DEFAULT style attribute
        } else {
            $(this).attr('style', 'background-color:' + color); //Coloring the cell with the selected color,
        }
    })
}