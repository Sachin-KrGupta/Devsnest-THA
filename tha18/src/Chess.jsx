import React from 'react';
import './Chess.css';

var r1 = [];
var r2 = [];
var b1 = [];

function WBox() {
    return (
        <div className="white"></div>
    );
}

function BBox() {
    return (
        <div className="black"></div>
    );
}


for(let i=0;i<4;i++) {
    r1.push(<BBox />);
    r1.push(<WBox />);
}

for(let i=0;i<4;i++) {
    r2.push(<WBox />);
    r2.push(<BBox />);
}

function Row1() {
    return (
        <div className='row1'>
            {r1}
        </div>
    );
}
function Row2() {
    return (
        <div className='row2'>
            {r2}
        </div>
    );
}


for(let i=0;i<4;i++) {
    b1.push(<Row1 />);
    b1.push(<Row2 />);
}
console.log(b1);

export default function Chess() {
    return (
        <div className='board'>
            {b1}
        </div>
    )
}
