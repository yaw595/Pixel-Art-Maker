// Select color input
const c = $('#colorPicker');

// Select size input
const h = $('#inputHeight');
const w = $('#inputWeight');

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    let height = h.val();
    let width = w.val();
    makeGrid(height, width);

    // Log the code to console to make sure it works
    // console.log('Heitht: ' + height + ' Width: ' + width);

    //TODO: Alert user when grid is created (My Style)
    $('#sMsg').fadeIn(2000).delay(2000).fadeOut(500);
})


function makeGrid(x, y) {
    $('tr').remove();

    // Your code goes here!
    //TODO: Create rows and columns using nested loops

    for (let i = 1; i <= x; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>'); //Columns
        for (let j = 1; j <= y; j++) {
            $('#table' + i).append('<td></td>'); // Rows
            $('#canvas').css('box-shadow', '0 5px 10px -2px rgba(0, 0, 0, 0.5)'); // Adding a shadow to the canvas background
        }
    }

    //TODO: Apply pixel color
    $('td').click(function pixColor() {
        let color = c.val();

        if ($(this).attr('style')) { //Check if the grid cell has a style attribute
            $(this).removeAttr('style'); //Remove the *DEFAULT style attribute
        } else {
            $(this).attr('style', 'background-color:' + color); //Coloring the cell with the selected color,
        }
    })
}