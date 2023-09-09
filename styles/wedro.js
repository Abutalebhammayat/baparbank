document.getElementById('wethdro-btn').addEventListener('click', function(){
    const button2 = getElementByInputFiled2('input-filed2')
    const WethdroAmountalon = getElementByWethdroAmount('wethdro-amount')
    const TotalAmountalon = getElementByTotalAmount('Total-Balance')
    const newWethdroAmount = WethdroAmountalon + button2 ;
    const newDepositTolalBalance = TotalAmountalon - button2 ;
    getElementByValuedByWethdroNumber('wethdro-amount', newWethdroAmount)
    getElementByValuedByTotalNumber('Total-Balance', newDepositTolalBalance)
})