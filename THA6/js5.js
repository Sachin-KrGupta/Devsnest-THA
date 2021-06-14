let r = 4;
let h = 10;

function volume(r,h) {
    return parseFloat((Math.PI*r*r*h)).toFixed(4);
}

console.log(volume(r,h));