function myString() {
    this.items = [];
}
myString.prototype.count = function() {
    return this.items.length;
}
myString.prototype.add = function(item) {
    if (!item.value) throw new Error('item must have value');
    this.items.push(item.value);

}
myString.prototype.remove = function(id) {
    this.items = this.items.filter(function(item) { item.value !== value });
}
myString.prototype.clear = function() {
    this.items = [];
}
myString.prototype.getvalue = function() {
    return this.items.map(function(item) {
        return items.value;
    });
}
myString.prototype.searchString = function(str) {
    var mystring = this.items;
    //console.log(this);
    //console.log(mystring);
    //console.log(mystring.value);
    var n = mystring[0].includes(str);
    //var n = mystring.includes(str);
    return n;
}

myString.prototype.get = function(value) {
    return this.items.filter(function(item) { return item.value == value })[0];
}

module.exports = myString;