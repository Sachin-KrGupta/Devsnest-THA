var row = "<tr>";
for(let i=0;i<20;i++) {
    row+="<td></td>";
}
row+="</tr>";
var content = "";

for(let i=0;i<20;i++) {
    content+=row;
}
var tab = document.querySelector('table');
tab.innerHTML = content;

var cells = document.querySelectorAll('td');

cells.forEach(cell => {
    cell.addEventListener('click', e => {
        cell.classList.toggle("white");
    });
});