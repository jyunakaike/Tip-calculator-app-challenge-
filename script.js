var bill = document.querySelector(".bill");
var tip = document.getElementsByClassName("percentage");
var customTip = document.querySelector(".custom");
var people = document.querySelector(".peopleInput");

var tipAmount = document.querySelector(".tipAmount");
var total = document.querySelector(".total");

let percentageValue = 0;
var buttonReset = document.getElementsByClassName("button");

function percentageClick(value) {
    console.log(value)
    percentageValue = value;
    calculate();
    
}

function calculate() {
    if (bill.value > 0 && people.value > 0 && percentageValue != null) {
        let AmountTip = (bill.value * (percentageValue / 100)) ;
        let totals = parseFloat(AmountTip)  + parseFloat(bill.value) ;
        console.log(AmountTip);
        console.log(totals);
        tipAmount.innerHTML = "$" + (AmountTip/people.value).toFixed(2);
        total.innerHTML = "$" + (totals/people.value).toFixed(2);
    }

}

const resetButton= ()=>{
    people.value = '';
    bill.value = '';
    tipAmount.innerHTML = '$' + "0.00";
    total.innerHTML= '$' + "0.00";
    customTip.value='';
}

bill.addEventListener("change",function () {
    calculate();
})
people.addEventListener("change",function () {
    calculate();
})


// bill.addEventListener("change", calculate);
// people.addEventListener("change",calculate);
// customTip
