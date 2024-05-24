"use strict";
//let myname:any ="tayyaba";
Object.defineProperty(exports, "__esModule", { value: true });
//myname=22;
//let myvarl:unknown=12.5.toFixed(2);
//console.log((myname as number).toFixed());
//console.log();
//=======m1=======
//function sum (num1 :number, num2 :number){
//    console.log(num1+num2);
//}
//sum(1 , 2)
//---------m2---------
//function sum2 (num1 :number, num2 :number ,...rests:number[]){
//    console.log(num1+num2 );
//}
//sum2(1 , 2+ 25, 4 , 5 )
//------function----------
function sum(...rests) {
    let sum = 0;
    for (let i = 0; i < rests.length; i++) {
        sum += rests[i];
    }
    console.log(sum);
}
