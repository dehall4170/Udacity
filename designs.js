// grid should appear when user enters desired width and height of the grid
function makeGrid() {
    let table = $("#pixelCanvas");
    const colorPicker = $("#colorPicker");
    // gets values for height and width from input and calls makeGrid
    let cols = $("#inputWidth").val();
    let rows = $("#inputHeight").val();
    // grid is cleared or created when submit is clicked
    table.children().remove();
    // loop over each row
    for (let i = 0; i < rows; i++) {
        table.append("<tr></tr>");
        // loop for each cell
        for (let j = 0; j < cols; j++)
            table
            .children()
            .last()
            .append("<td></td>");
    }
    // color picker color is applied on the clicked cell
    table.on("click", "td", function() {
        let color = $("input[type='color']#colorPicker").val();
        // changes color of pixel when clicked
        $(this).css('background-color', color);
    });
}

const submitButton = $("input[type='submit']");
// builds selected grid
submitButton.click(function(e) {
    e.preventDefault();
    makeGrid();
});
