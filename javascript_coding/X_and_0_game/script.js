function displayValues(cell_no,value) {
    var cell_id = "cell"+ cell_no;
    document.getElementById(cell_id).innerText = value.toUpperCase();
}