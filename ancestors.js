// name property added to make objects easier to identify
var foo = {name: 'foo'};
var bar = Object.create(foo);
bar.name = 'bar';
var baz = Object.create(bar);
baz.name = 'baz';
var qux = Object.create(baz);
qux.name = 'qux';

foo.ancestors = function() {
  var protos = [];
  var obj = this;

  while (Object.getPrototypeOf(obj)) {
    obj = Object.getPrototypeOf(obj);
    protos.push(obj.name || 'Object.prototype')
  }

  return protos;
}

qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
foo.ancestors();  // returns ['Object.prototype']