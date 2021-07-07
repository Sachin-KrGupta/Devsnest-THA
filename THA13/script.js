//random_rgba() function is copied from stackoverflow

var x = document.querySelector('.main');
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}


document.querySelector('#getMeme').addEventListener('click', getMeme);

function getMeme() {

    let xhr = new XMLHttpRequest();
    xhr.open('GET','https://meme-api.herokuapp.com/gimme');
    
    xhr.onload = function () {
        if(this.status==200) {
            let response = JSON.parse(xhr.responseText).preview;
            let title = JSON.parse(xhr.responseText).title;
            document.querySelector('img').src = response[2];
            document.querySelector('h3').innerText = title;
            let color = random_rgba();
            document.querySelector('body').style.backgroundColor = color;
        }
    }
    xhr.send();
}