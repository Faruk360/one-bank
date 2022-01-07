
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
 

const  depositBtn           = document.getElementById('deposit_btn');
depositBtn.addEventListener('click',function () {
   
const newDepositText        = document.getElementById('newDeposit').value;
const newDeposit            = parseFloat(newDepositText);

upDateBalance('currentDeposit', newDeposit)
document.getElementById('newDeposit').value = '';
upDateBalance('Balance', newDeposit)

   function upDateBalance(id , newDeposit) {
      const current  = document.getElementById(id).innerText;
      const currentNumber      = parseFloat(current);
      const newCurrent   = currentNumber + newDeposit;
      document.getElementById(id).innerText = newCurrent; 
   }
})



const  withdrawBtn  = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click',function () {
   const withdrawNumber  = getInputNumber('withdrawAmount');
   const currentWithdraw  = document.getElementById('currentWithdraw').innerText;
   const currentWithdrawN = parseFloat(currentWithdraw);
   document.getElementById('currentWithdraw').innerText = currentWithdrawN + withdrawNumber ; 
   const tb = document.getElementById('Balance').innerText;
   document.getElementById('Balance').innerText = tb - withdrawNumber ;
   document.getElementById('withdrawAmount').value = '';

})
   function getInputNumber(id) {
      const Amount = document.getElementById(id).value;
      const amountNumber = parseFloat(Amount);
      return amountNumber;
   }