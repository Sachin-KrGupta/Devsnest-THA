var cells = document.querySelectorAll('td');

cells.forEach(cell => {
    cell.addEventListener('click', e => {
        cell.style.backgroundColor = "white";
        cell.style.border = "none";
    });
});