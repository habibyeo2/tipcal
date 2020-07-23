let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let billAmount = document.getElementById('bill-amount').value;
    let tipPercentage = document.getElementById('tip-percentage').value;
    var adjustedTipPercentage = tipPercentage / 100
    
    let tipAmount = document.getElementById('tip-amount').value = billAmount * adjustedTipPercentage;
    document.getElementById('total-bill').value = parseFloat(billAmount) + parseFloat(tipAmount);

})