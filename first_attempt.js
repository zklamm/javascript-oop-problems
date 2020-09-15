1.
name = 'Joan'; // can be deleted with delete keyword
var name = 'Joan'; // cannot be deleted with delete keyword

2.
// On line 11, the boat object calls its own log method, which in turn invokes the whatIsThis function defined on lines 1 to 3. The window object is logged to the console.

// The reason this happens is because of context loss. Even though this within the log method points to boat, it loses its context whenever an internal function is invoked within the log method. Since the call to whatIsThis on line 7 does not provide an explicit execution context, the function is bound to the global object.

// One way to fix this context loss is to explicitly pass in the context:

function whatIsThis(context) {
  console.log(context);
}

var boat = {
  log: function() {
    whatIsThis(this);
  }
}

boat.log();

3.
var obj = {
  name: 'Andrea',
  logName: function() {
    console.log(this.name);
  },
};

obj.logName();

4.
// The value of this is determined by a how a function or method is called (it may be different at each invocation). In the global execution context, this refers to the global object (window in browsers). Inside a function, the value of this depends on how the function is called (i.e., whether there is an implicit or explicit execution context). It's important to note that this is determined at the time of invocation, not definition.

5.
// call and apply are built-in methods that allow the user to explicitly set the execution context of a particular function and then invoke that function.

// The first argument for both methods is the value to which this needs to be set.

// call's remaining arguments will be in a comma separated list form that will be passed to the function that is being called, whereas apply's remaining arguments will be passed in as an array of elements.

6.
function addToTotal(a, b) {
  return this.total + a + b;
}

var object = {
  total: 7,
};

addToTotal.call(object, 3, 5); // returns 15
addToTotal.apply(object, [3, 5]); // returns 15

7.
// The code above will log out 25.

// This is happening because when goFaster is invoked on line 9, the value of this is referencing the window object. So window.speed += 10 (on line 4) will return undefined since window.speed is undefined.

// Had we wanted to increase auto.speed by 10, we would have needed to call goFaster with an explicit execution context, i.e. goFaster.call(auto, 10).

8.
var box = {
  x: 25,
  y: 42,
  z: 12,
  logVolume: function() {
    var volume = this.x * this.y * this.z;
    console.log(volume);
  }
}

9.
box2.logVolume = box.logVolume;

10.
// Closures are created when a function is declared, and allow the function to retain access to all of the variables visible to it inside of the scope where it was declared. The use of closures allows for creating and using private data because variables inside closures are available to the closure but never outside it.

11.
// On line 7, we store the return value of the function bar, which is itself a function which in this case has closed over the string 'hello', into the variable baz. JS allows for higher-order functions, which can receive a function as an argument or return a function or both.

// This example illustrates the principle of closures. Because of the closure created by the bar function, we are able to retain access to the argument hello that was previously passed in. This is why line 8 will log 'hello' to the console.

12.
// 'qux' is not eligible for garbage collection after line 10 executes because it is still accessible (retained via closure) by baz.

// Values that are no longer accessible from anywhere in the code are eligible for garbage collection, which frees up the memory that they used for reuse by other parts of the program.

13.
var foo = (function() {
  var counter = 0;

  return {
    increment: function() {
      counter += 1;

      return counter;
    },

    display: function() {
      console.log('The total count is: ' + String(counter));
    },
  }
})();

14.
var foo = {
  numbers: [1, 2, 3, 4, 5],
  qux: function() {
    var self = this;
    self.numbers.forEach(function(number, idx) {
      self.numbers[idx] = number * 2;
    });
  }
};

15.
// This illustrates the concept of partial function application.

// Partial function application is possible because of closures and because JS allows for higher order functions. The function returned by makeLogger closes over the argument ('My name') passed to the name parameter and therefore retains access to it when later invoked on line 13.

16.
// Object factories are useful in that they provide a template from which many similar objects can be created, thus reducing duplicate code. However, they fail to take advantage of the prototyped based object orientation that JS provides. OLOO and the pseudo-classical pattern for creating new objects, on the otherhand, allow the developer to more directly leverage inheritance, encapsulation, and polymorphism in their programs.

17.
var Foo = {
  init: function(a, b) {
    this.a = a;
    this.b = b;

    return this;
  },

  bar: function() {
    consoe.log(this.a);
  },

  baz: function() {
    console.log(this.b);
  },
}

var myFoo = Object.create(Foo).init('bar','baz');
myFoo.hasOwnProperty('a')   // true;

18.
// The impact is that the prototypes of each 'class' in the first snippet are referencing the same object. Any behaviors added to Dog.prototype will also be available to objects created from the Animal constructor. This side effect is avoided with the second code snippet because the prototypes are not referencing the same object. Instead, the Dog prototype is referencing an object created from the Animal prototype.

19.
// When a function is invoked with the keyword new in front of it, we call it a constructor. When invoked, a new object is created within the function scope and is referenced by this, which will be returned by the function unless the function explicitly returns some other object. It is also important to note that this object will inherit from the constructor's prototype.

20.
function Contact(name, gender) {
  this.name = name;
  this.gender = gender;
}

Contact.prototype.hasName = function(searchName) {
  return searchName === this.name;
}