/*
HW-5; Objects and Classes

Instructions: Please create solutions to the following problems.
You can include all of your answers in this single document.

In order to test your HW, I will simply copy and paste the
entirety of this document into a web console and check that
the correct output occurs.

 */

/**************************************************/
// PROBLEM 1 - Classes - Vec()
//
// Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.
//
// Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (the one in this and the parameter) x and y values.
//
// Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).


// Your code here.

// create class for Vector and give it parametes x and y
function Vec(x, y) {
  this.x = x;
  this.y = y;
}

// create prototype function for new Vector that adds x and y with new vectors x and y
Vec.prototype.plus = function(newVec) {
  return new Vec(this.x + newVec.x, this.y + newVec.y);
};

//create prototype function for same as above but one that subtracts numbers
Vec.prototype.minus = function(newVec) {
  return new Vec(this.x - newVec.x, this.y - newVec.y);
};

// Object.define taking two parameters, first the object, Vec.prototype, then the length that later be returned
// Use get in front of method like suggested in the book
// Also using Math.sqrt to get 5 like suggested in the book. You square x and y add them and use Math.sqrt to get 5
Object.defineProperty(Vec.prototype, 'length', {
  get: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
});

console.log(new Vec(1, 2).plus(new Vec(2,3)));
console.log(new Vec(1, 2).minus(new Vec(2,3)));
console.log(new Vec(3, 4).length);






/**************************************************/
// PROBLEM 2 - Groups
//
// The standard JavaScript environment provides another data structure called Set. Like an instance of Map, a set holds a collection of values. Unlike Map, it does not associate other values with those—it just tracks which values are part of the set. A value can only be part of a set once—adding it again doesn’t have any effect.
//
// Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (it if was a member), and has returns a Boolean value indicating whether its argument is a member of the group.
//
// Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.
//
// Give the class a static from method that takes an iteratable object as argument and creates a group that contains all the values produced by iterating over it.

class Group {
  // empty array for group members
    constructor() {
      this.member = [];
    }
    // if value isn't part of array, add value
    add(val) {
      if(!this.member.includes(val)) {
        this.member.push(val);
      }
    }
    // use filter and arrow functions to delete value equal to group member. (this confused me, but the book suggested to filter the array WITHOUT the value???)
    delete(val) {
      this.member = this.member.filter(otherval => otherval !== val);
    }
    // Use .includes to return boolean i think??
    has(val) {
      return this.member.includes(val);
    }
    //using static function like book suggests
    static from(newstuff) {
    let group = new Group;
    for (let val of newstuff) {
      group.add(val);
    }
    return group;
  }
}
//creates new group with from method
let group = Group.from([10, 20]);

console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));


/**************************************************/
// PROBLEM 3 - Retry
//
// Say you have a function primitiveMultiply that, in 20 percent of cases, multiplies two numbers, and in the other 80 percent, raises an exception of type MultiplicatorUnitFailure. Write a function ( "reliableMultiply()" ) that wraps this clunky function and just keeps trying until a call succeeds, after which it returns the result.
//
// Make sure you handle only the exceptions you are trying to handle.

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2)
    return a * b;
  else
    throw new MultiplicatorUnitFailure("Klunk");
}

function reliableMultiply(a, b) {
  // for (;;) make loop that doesn't terminate on its own
  for (;;) {
  //call primitiveMultiply in try block
    try {
      return primitiveMultiply(a, b);
  // If I thought about this right, throw e is looking for the correct numbers to pass to catch (e) -
  // try is also trying to look for the 8, 8. If it doesn't find it is looks in catch block.
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure))
      throw e;
    }
  }
}

console.log(reliableMultiply(8, 8));






/**************************************************/
// SUBMISSION
//
// When you have finished with this weeks homework, please write a readme response to the week. You should then add this directory into your git repo, sync it, and provide a link to the repo directory (1 link only), to the HW-5 Submission Forum via Moodle.
/**************************************************/
