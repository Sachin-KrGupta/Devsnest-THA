var check = -1;
var flag = 0, i=0, curr,prev, fl = 0, l;
var x = {"1":"url(mango.jpg)", "2":"url(orange.jpg)", "3":"url(banana.jpg)", "4":"url(pineapple.png)", "5":"url(watermelon.png)", "6":"url(apple.jpg)"};
var blocks = document.querySelectorAll('.block');
var visited = [];
var move = document.querySelector('#move').textContent;
var point = document.querySelector('#point').textContent;

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


for (let i in x) {
    while(true) {

        let t1 = getRandomInt(0,11);
        let a = blocks[t1];
        let t2 = getRandomInt(0,11);
        if(t1==t2)
        {
            continue;
        }
        
        let b = blocks[t2];
        
        if((visited.find(e => e==t1)==undefined && visited.find(e => e==t2)==undefined))
        {               
            a.childNodes[3].style.backgroundImage = x[i];
            b.childNodes[3].style.backgroundImage = x[i];
            visited.push(t1);
            visited.push(t2);
            break;
        }
    }
}


blocks.forEach(block => {

    block.addEventListener('click', e => {
        console.log(fl);
        if(fl==1)
        {
            return ;
        }
        block.classList.toggle('is-flipped');
        block.style.pointerEvents = "none";
        
        prev = curr;
        curr = block;      
        i++;        
        if(i%2==0)
        {
            fl=1;
            setTimeout(function(){
                block.classList.toggle('is-flipped');
                prev.classList.toggle('is-flipped');
                fl=0;
                move++;
                document.querySelector('#move').textContent = move;
                block.style.pointerEvents = "auto";
                prev.style.pointerEvents = "auto";
            }, 1500);    
            
        }
        if(flag==0)
        {
            check = block.childNodes[3].style.backgroundImage;
            l = block;
            flag=1;
        }
        else
        {
            if(block.childNodes[3].style.backgroundImage == check && prev!=curr)
            {
                setTimeout(() => {
                    block.style.visibility = "hidden";
                    l.style.visibility = "hidden";
                    point++;
                    document.querySelector('#point').textContent = point;
                    if(point==6)
                    {
                        document.querySelector('.main').style.display = "none";
                        document.querySelector('.result').style.display = "none";
                        document.querySelector('.win').textContent = `YOU WIN WITH ${move} moves`;
                        document.querySelector('#refresh').style.display = "block";
                    }
                },1501);
            }
            else
            {
                console.log("NO");
            }
            flag=0;
            check = -1;
        }
        
    });
});