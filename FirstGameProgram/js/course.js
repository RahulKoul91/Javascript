var anObject = {
    a: 2
};

// Create anotherObject using anObject as a prototype ( creating an object anotherObject based on prototype of another object ( event though new object doesn't have property but can still access it))
var anotherObject = Object.create(anObject);

console.log(anotherObject.a); // will show 2


//advantage of doing above is that we can provide similar properties to other objects which can then overide the value.
//First way of doing
/*
var Pastry = {
    type: "",
    flavor: "",
    levels: 0,
    price: "",
    occasion: "",

    // Describe the pastry
    describe: function () {
        var description = "The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavor + " flavor, " + this.levels + " layer(s), and costs " + this.price + ".";
        return description;
    }
};
console.log("pastry object created"); // will show 2

var muffin = Object.create(Pastry);
muffin.type = "muffin";
muffin.flavor = "blueberry";
muffin.levels = 1;
muffin.price = "$2";
muffin.occasion = "breakfast";

var cake = Object.create(Pastry);
cake.type = "cake";
cake.flavor = "vanilla";
cake.levels = 3;
cake.price = "$10";
cake.occasion = "birthday";

console.log(muffin.describe());
console.log(cake.describe());
*/
//Second way of doing.

var pastry = {
	init: function(type,flavor,levels,price,occasion)
	{
		this.type = type;
		this.flavor = flavor;
		this.levels = levels;
		this.price = price;
		this.occasion = occasion;
	},

	describe: function () {
        var description = "The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavor + " flavor, " + this.levels + " layer(s), and costs " + this.price + ".";
        return description;
    }
};

var muffin = Object.create(pastry);
muffin.init("muffin", "blueberry", 1, "$2", "breakfast");

var cake = Object.create(pastry);
cake.init("cake", "vanilla", 3, "$10", "birthday");

console.log(muffin.describe());
console.log(cake.describe());
