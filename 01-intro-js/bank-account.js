// function getNewBankAccount(creditLimit) {
function getNewBankAccount() {
    return {
        balance: 0,
        creditLimit : 0,
        deposit: function(amount){
            this.balance = this.balance+amount;
        },
    
        withdraw: function(money){
            this.balance = this.balance - money;
            // withdraw money here
        },
        setCreditLimit : function ( creditLimit ) {
            this.creditLimit = creditLimit;
        }
    }
} 

module.exports = getNewBankAccount;