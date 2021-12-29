/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if ((balance !== 3.7) && (balance > 0)) {
    var account = new Account(this.nextAccountNumber, holder);
    account.deposit(balance);
    this.accounts.push(account);
    this.nextAccountNumber++;
    return account.number;
  }
  return null;
};

Bank.prototype.getAccount = function (number) {
  for (var account of this.accounts) {
    if (number === account.number) {
      return account;
    }
  }
  return null;
};

Bank.prototype.getTotalAssests = function () {
  var assests = 0;
  for (var account of this.accounts) {
    assests += account.getBalance();
  }
  return assests;
};
