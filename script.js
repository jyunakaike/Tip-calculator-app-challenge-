var tipAmount = document.querySelector(".tipAmount");
var total = document.querySelector(".total");
var tip = document.getElementsByClassName("percentage");
var bill = document.querySelector(".bill");
var people = document.querySelector(".peopleInput");
var buttonReset = document.getElementsByClassName("button");
var customTip = document.querySelector(".custom");
// var resetBtn = document.querySelector(".reset");


// console.log(tipAmount);
// console.log(total);
// console.log(tip);
// console.log(tip[0].value);
// console.log(tip[1].value);
// console.log(tip[2].value);
// console.log(tip[3].value);
// console.log(tip[4].value);
// console.log(bill.value);
// console.log(people.value);
// console.log(buttonReset);
// console.log(customTip);


// for(var i=0 ; i<tip.length ; i++ ){
//     tip[i].addEventListener("click", ()=>{
//         var current = document.getElementsByClassName("active");

//         if(current.length >0){
//             current[0].className = cur
//         }
//     })
// }

let percentageValue= 0;

function percentageClick(value){
    percentageValue = value;
    console.log(percentageValue);
    console.log(bill.value);
    console.log(people.value);
    calculate(percentageValue, bill.value, people.value);
    
}

function calculate(percentage, bill, people){
    let AmountTip = (bill * (percentage/100))/people;
    let total = AmountTip + bill / people
    console.log( AmountTip );
    console.log(total);
}


