var me = {
  firstName: 'Zac',
  lastName: 'Klammer',
};

var wife = {
  firstName: 'Lindsey',
  lastName: 'Klammer',
}

var friend = {
  firstName: 'Steven',
  lastName: 'Rodriquez',
}

var mom = {
  firstName: 'Melanie',
  lastName: 'Klammer',
}

var dad = {
  firstName: 'Paul',
  lastName: 'Klammer',
}

var people = {
  collection: [me, wife, friend, mom, dad],

  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName)
  },

  rollCall: function() {
    this.collection.forEach(this.fullName)
  },

  add: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    this.collection.push(person);
  },

  getIndex: function(person) {
    var index = -1;
    this.collection.forEach(function(comparator, i) {
      if (comparator.firstName === person.firstName &&
          comparator.lastName === person.lastName) {
        index = i;
      }
    });

    return index;
  },

  remove: function(person) {
    var index;
    if (this.isInvalidPerson(person)) {
      return;
    }

    index = this.getIndex(person);
    if (index === -1) {
      return;
    }

    this.collection.splice(index, 1);
  },

  isInvalidPerson: function(person) {
    return typeof person.firstName !== 'string' &&
           typeof person.lastName !== 'string';
  },

  get: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    return this.collection[this.getIndex(person)];
  },

  update: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    var existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },
};

people.rollCall();

console.log(people.getIndex(friend));
people.remove(friend);
console.log(people.getIndex(friend));
