function makeGrid() {
  let table = $("#pixelCanvas");
  const colorPicker = $("#colorPicker");
  let cols = $("#inputWidth").val();
  let rows = $("#inputHeight").val();

  table.children().remove();

  for (let i = 0; i < rows; i++) {
    table.append("<tr></tr>");

    for (let j = 0; j < cols; j++)
      table
        .children()
        .last()
        .append("<td></td>");
  }

  table.on("click", "td", function() {
    let color = $("input[type='color']#colorPicker").val();

    $(this).attr("bgcolor", color);
  });
}

const submitButton = $("input[type='submit']");

submitButton.click(function(e) {
  e.preventDefault();
  makeGrid();
});
