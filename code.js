
const loginButton   =  document.getElementById('login');
const withdraw      =  document.getElementById('withdraw');
const deposit       =  document.getElementById('deposit');
loginButton.addEventListener('click',function () {
   const login_page    = document.getElementById('login_page');  
   login_page.style.display = "none";
});
loginButton.addEventListener('click',function () {
   const login_page    = document.getElementById('tangition');  
   login_page.style.display = "block";
});
withdraw.addEventListener('click',function () {
   const login_page2    = document.getElementById('withdraw_area');  
   login_page2.style.display = "block";
})     
deposit.addEventListener('click',function () {
   const login_page4    = document.getElementById('withdraw_area');  
   login_page4.style.display = "none";
})     
withdraw.addEventListener('click',function () {
   const login_page3    = document.getElementById('deposit_area');  
   login_page3.style.display = "none";
})     
deposit.addEventListener('click',function () {
   const login_page5    = document.getElementById('deposit_area');  
   login_page5.style.display = "block";
})
 

const  deposit_btn  = document.getElementById('deposit_btn');
deposit_btn.addEventListener('click',function () {
const deposit_amount   = document.getElementById('deposit_amount').value;
const deposit_number   = parseFloat(deposit_amount);
const currentDepositAmount = document.getElementById('current_deposit_amount').innerText;
const depositAmountNumber   = parseFloat(currentDepositAmount);
const totalDepositAmount =   depositAmountNumber + deposit_number;
document.getElementById('current_deposit_amount').innerText = totalDepositAmount;

document.getElementById('currentAmount').innerText = deposit_number;

const  withdrawBtn  = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click',function () {
const withdrawAmount   = document.getElementById('currentWithdraw').value;
const withdrawNumber   = parseFloat(withdrawAmount);
const currentDepositAmount = document.getElementById('currentWithdrawAmount').innerText;
const withdrawAmountNumber   = parseFloat(currentDepositAmount);
const totalWithdrawAmount =   withdrawNumber + withdrawAmountNumber; 
const current_deposit_amount   = document.getElementById('current_deposit_amount').innerText;
const deposit_number1   = parseFloat(current_deposit_amount);
console.log(deposit_number1);

const currentAmount = document.getElementById('current_deposit_amount').innerText;
const depositAmount  = parseFloat(currentAmount);
document.getElementById('currentWithdrawAmount').innerText = totalWithdrawAmount;
const amount = depositAmount - totalWithdrawAmount ;
document.getElementById('currentAmount').innerText = amount;

})

})