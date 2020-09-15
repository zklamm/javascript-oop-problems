var invoices = {
  unpaid: [],
}

invoices.add = function(name, amount) {
  this.unpaid.push({
    name: name,
    amount: amount,
  });
};

invoices.totalDue = function() {
  var total = 0;

  this.unpaid.forEach(function(invoice) {
    total += invoice.amount;
  });

  return total;
};

invoices.paid = [];

invoices.payInvoice = function(name) {
  var unpaid = [];
  var self = this;

  this.unpaid.forEach(function(invoice) {
    invoice.name === name ? self.paid.push(invoice) : unpaid.push(invoice);
  });

  this.unpaid = unpaid;
}

invoices.totalPaid = function() {
  var total = 0;

  this.paid.forEach(function(invoice) {
    total += invoice.amount;
  });

  return total;
}

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.5);
invoices.add('Slough Digital', 300);

invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');
