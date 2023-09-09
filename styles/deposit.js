document.getElementById('deposit-btn').addEventListener('click', function(){
    const button = getElementByInputFiled('input-filed')
    const DepositAmountalon = getElementByDepositAmount('deposit-amount')
    const TotalAmountalon = getElementByTotalAmount('Total-Balance')
    const newDepositAmount = DepositAmountalon + button ;
    const newDepositTolalBalance = TotalAmountalon + button ;
    getElementByValuedByDepositNumber('deposit-amount', newDepositAmount)
    getElementByValuedByTotalNumber('Total-Balance', newDepositTolalBalance)
})