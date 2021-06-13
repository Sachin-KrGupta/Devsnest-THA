var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function maxElement(arr) {
    let res = {};
    let maxA=-1;
    let a;
    arr.forEach(element => {
        res[element]=0;
    });
    arr.forEach(element => {
        res[element]+=1;
        if(res[element]>maxA) {
            maxA = res[element];
            a = element;
        }
    });

    return [a,maxA];
}

let k = maxElement(arr1);
console.log(`${k[0]} ( ${k[1]} times)`);