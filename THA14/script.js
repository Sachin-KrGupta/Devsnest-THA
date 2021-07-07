var vol = document.querySelector('#volChange');
var mov = document.querySelector('#mouseOver');
var mot = document.querySelector('#mouseOut');
vol.addEventListener('change', () => {
    vol.value = "I am Changed !!";
});
mov.addEventListener('mouseover', () => {
    document.querySelector('body').style.backgroundColor = 'red';
});
mot.addEventListener('mouseout', () => {
    document.querySelector('body').style.backgroundColor = 'blue';
});
window.onload = () => {
    document.querySelector('h1').innerText = "THIS WILL SHOW IF YOU LOAD WINDOW";
}
window.onscroll = () => {
    document.querySelector('#scroll').innerText = "This will trigger if you scroll !!";
}
document.querySelector('#double').addEventListener('dblclick', () => {
    document.querySelector('body').style.backgroundColor = "yellow";
}); 