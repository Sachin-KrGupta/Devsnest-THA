var buttons = document.querySelectorAll("button");
var result = document.querySelector('input');

buttons.forEach(button => {
    button.addEventListener('click', e => {
        let str = button.innerText;
        if(str == 'C') {
            result.value = "";
        }
        else if(str == '=') {
            result.value = parseFloat(eval(result.value)).toFixed(5);
        }
        else {
            result.value +=str;
        }
    });
});