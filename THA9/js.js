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
        let av = parseInt(document.querySelector('#a').textContent);
        let bk = parseInt(document.querySelector('#b').textContent);
        cell.classList.toggle("white");
        if (cell.style.backgroundColor == "red" || cell.style.backgroundColor == "") {
            cell.style.border = "none";
            cell.style.backgroundColor = "white";
            av-=1;
            bk+=1;
            document.querySelector('#a').textContent=av;
            document.querySelector('#b').textContent=bk;
          } else {
            cell.style.border = "1px solid rgba(255, 88, 88,1)";
            cell.style.backgroundColor = "red";
            av+=1;
            bk-=1;
            document.querySelector('#a').textContent=av;
            document.querySelector('#b').textContent=bk;
          }
    });
});