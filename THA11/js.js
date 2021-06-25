var qz = [
    {
        "question": "1. Inside which HTML element do we put the JavaScript?",
        "o1": "<scripting>",
        "o2": "<javascript>",
        "o3": "<script>",
        "o4": "<js>",
        "ans": "o3"
    },
    {
        "question": "2. How do you create a function in JavaScript?",
        "o1": "function myFunction()",
        "o2": "function:myFunction()",
        "o3": "def myFunction()",
        "o4": "void myFunction()",
        "ans": "o1"
    },
    {
        "question": "3. How to write an IF statement in JavaScript?",
        "o1": "if i=5:",
        "o2": "if(i==5)",
        "o3": "if i is 5",
        "o4": "if-i==5",
        "ans": "o2"
    },
    {
        "question": "4. Which is not correct syntax to declare variable?",
        "o1": "var x=5;",
        "o2": "const x=5;",
        "o3": "let x=5;",
        "o4": "assume x=5;",
        "ans": "o4"
    },
    {
        "question": "5. Which sign is used for arrow function?",
        "o1": "->",
        "o2": "=>",
        "o3": "-->",
        "o4": ">>>",
        "ans": "o2"
    }
];
var ques = document.querySelector('.question');
var o1 = document.querySelector('#o1');
var o2 = document.querySelector('#o2');
var o3 = document.querySelector('#o3');
var o4 = document.querySelector('#o4');
var score = 0, i=0;
var buttons = document.querySelectorAll(".submit");
var playAgain = document.querySelector('#playAgain');

function putQuestion() {
    ques.innerText = qz[i].question;
    o1.innerText = qz[i].o1;
    o2.innerText = qz[i].o2;
    o3.innerText = qz[i].o3;
    o4.innerText = qz[i].o4;
}

playAgain.addEventListener('click', () => {
    window.location.reload();
});

putQuestion();

buttons.forEach( button => {
    button.addEventListener('click', e => {
        if(button.id === qz[i].ans) {
            score++;
            console.log(score);
        }
        i++;

        setTimeout(()=> {
            document.querySelector('.quiz1').classList.remove("animate__animated");
            document.querySelector('.quiz1').classList.remove("animate__bounceIn");
            document.querySelector('.quiz1').classList.remove("animate__slower");
        },800);
        document.querySelector('.quiz1').classList.add("animate__animated");
        document.querySelector('.quiz1').classList.add("animate__bounceIn");
        document.querySelector('.quiz1').classList.add("animate__slower");
        if(i>=qz.length)
        {
            document.querySelector('.quiz1').classList.add('dn');
            document.querySelector('.result').classList.remove('dn');
            document.querySelector('#score').innerText = `You Scored ${score}/${qz.length}.`;
            return ;
        }
        putQuestion();
    })
})