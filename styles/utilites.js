// 1. Input filed In Depo 
function getElementByInputFiled(input){
    const depositBtn = document.getElementById(input) ;
    const depositBtntext = depositBtn.value
    const depositBtntextnumber = parseFloat(depositBtntext) ;
    depositBtn.value = ''; 
    return depositBtntextnumber; 
}

// 3. Deposit amount 
function getElementByDepositAmount(DepoAmount){
    const DepositAmount = document.getElementById(DepoAmount) ;
    const DepositAmountText = DepositAmount.innerText
    const DepositAmountTextnumber = parseFloat(DepositAmountText) ;
    return DepositAmountTextnumber;

}
function getElementByValuedByDepositNumber(DepoAmount, newDepositAmount){
    const DepositAmountAgain = document.getElementById(DepoAmount) ;
    DepositAmountAgain.innerText = newDepositAmount ;
}

// 2. Input filed In wethd
function getElementByInputFiled2(input2){
    const wethdroBtn = document.getElementById(input2) ;
    const wethdroBtntext = wethdroBtn.value
    const wethdroBtntextnumber = parseFloat(wethdroBtntext) ;
    wethdroBtn.value = ''; 
    return wethdroBtntextnumber; 
} 



// 4. Wethdro amount 
function getElementByWethdroAmount(wethdAmount){
    const wethdroAmount = document.getElementById(wethdAmount) ;
    const wethdroAmountText = wethdroAmount.innerText
    const wethdroAmountTextnumber = parseFloat(wethdroAmountText) ;
    return wethdroAmountTextnumber;

}
function getElementByValuedByWethdroNumber(wethdAmount, newWethdroAmount){
    const wethdroAmountAgain = document.getElementById(wethdAmount) ;
    wethdroAmountAgain.innerText = newWethdroAmount ;
}

// 5. Total amount 
function getElementByTotalAmount(TotalAmount){
    const TotalAmountText = document.getElementById(TotalAmount) ;
    const TotalAmountString = TotalAmountText.innerText
    const TotalAmountnumber = parseFloat(TotalAmountString) ;
    return TotalAmountnumber;

}

function getElementByValuedByTotalNumber(TotalAmount, newDepositTolalBalance){
    const TotalAmountTextAgain = document.getElementById(TotalAmount) ;
    TotalAmountTextAgain.innerText = newDepositTolalBalance ;
}
