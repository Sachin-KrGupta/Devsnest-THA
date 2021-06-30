var x = document.querySelector('#task');
var y = document.querySelector('#sub');

function showTodo() {
    let arr= [];
    arr = JSON.parse(localStorage.getItem('Tasks'));
    if(arr!=null) {
        let li = document.querySelector('#lists');
        li.innerHTML = "";
        arr.forEach(e => {        
            li.innerHTML+=`<li class="list-group-item">${e} <i class="far fa-times-circle fa-2x"></i></li>`;
        });
    }
    check();
}
showTodo();

function check() {
    var buttons = document.querySelectorAll('i');
    buttons.forEach(button => {
        button.addEventListener('click', e => {
            let arr= [];
            let index = -1;
            arr = JSON.parse(localStorage.getItem('Tasks'));
            if(arr!=null) {
                for(let j=0;j<arr.length;j++) {
                    if(button.parentNode.innerText == arr[j]+" ") {
                        index = j;
                        break;
                    }
                }
                if(index!=-1)
                {
                    arr.splice(index,1);
                }
                localStorage.setItem('Tasks',JSON.stringify(arr));
            }
            showTodo();            
        });
    });
}

function addTodo () {
    let arr = [];
    let str = x.value;
    if(str.length != 0) {
        arr = JSON.parse(localStorage.getItem('Tasks'));
        if(arr==null) {
            arr=[];
        }
        arr.push(str);
        localStorage.setItem('Tasks', JSON.stringify(arr));
    }
    showTodo();
}
y.addEventListener('click', () => {
    addTodo();
    x.value="";
});
