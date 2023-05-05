// deposit 

document.getElementById("deposit-btn").addEventListener("click", function(){
    let newDepositAmount = document.getElementById("deposit-amount");
    let totalDeposit = document.getElementById("total-deposit");
    totalDeposit.innerText = parseFloat(totalDeposit.innerText)  +  parseFloat(newDepositAmount.value)

    const totalBalance = document.getElementById("total-balance")
    totalBalance.innerText = parseFloat(totalBalance.innerText) + parseFloat(newDepositAmount.value)
    newDepositAmount.value = ""

})