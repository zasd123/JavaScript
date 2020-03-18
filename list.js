function myString() {
    this.items = [];
    this.count;
}
myString.prototype.count = function() {
    return this.items.length;
}
myString.prototype.add = function(item) {
    //if (!item.id) throw new Error('item must have id');
    this.items.push(item);
}
myString.prototype.remove = function(id) {
    this.items = this.items.filter(function(item) { item.id !== id });
}
myString.prototype.clear = function() {
    this.items = [];
}
myString.prototype.getIds = function() {
    return this.items.map(function(item) {
        return item.id;
    });
}
myString.prototype.searchString = function() {
    return this.items.map(function(item) {
        return item.id;
    });
}

myString.prototype.get = function(id) {
    return this.items.filter(function(item) { return item.id == id })[0];
}

module.exports = myString;