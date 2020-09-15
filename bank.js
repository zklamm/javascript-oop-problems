function makeBank() {
  var accounts = [];

  function makeAccount(number) {
    var balance = 0;
    var transactions = [];

    return {
      balance: function() {
        return balance;
      },

      transactions: function() {
        return transactions;
      },

      number: function() {
        return number;
      },

      deposit: function(amount) {
        balance += amount;
        transactions.push({type: 'deposit', amount: amount});
        return amount;
      },

      withdraw: function(amount) {
        if (amount > balance) {
          amount = balance;
        }

        transactions.push({type: 'withdraw', amount: amount});
        balance -= amount;
        return amount;
      },
    };
  };

  return {
    openAccount: function() {
      var number = accounts.length + 101;
      var account = makeAccount(number);
      accounts.push(account);
      return account;
    },

    transfer: function(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    },
  };
};