/*
HW-4; Continue with JS

Instructions: Please create solutions to the following problems.
You can include all of your answers in this single document.

In order to test your HW, I will simply copy and paste the
entirety of this document into a web console and check that
the correct output occurs.

 */





/**************************************************/
// PROBLEM 1 - Basic Function Definitions
//
// Define 1 function using both Function Definition and Function Expression formats.
// For the function definition format, label the function as; squarePrintFuncDef
// For the function expression format, label the function as; squarePrintFuncExpress
//
// These functions should take a single input, which will be a Number.
// Each function should;
// 1. square this number
// 2. then print the result as a string to the console log, behind the text "The result is: "
//
//  As an example, if squarePrintFuncDef( 2 ) is called,
//  it should print "The result is: 4" to the web console.
//
// Your code goes here

function squarePrintFuncDef(a) {
  var result = a * a;
  return result;
}
var sum = squarePrintFuncDef(2);
console.log("The result is: "  + sum);

let squarePrintFuncExpress = function(a) {
  return a * a;
};

let result =  squarePrintFuncExpress(2);
console.log("The result is: "  + result);


/**************************************************/
// PROBLEM 2 - Minimum
//
// Last week introduced the standard function Math.min() that returns its smallest argument. We can do that ourselves now. Write a function min() that takes two arguments and returns their minimum.

// Your code here.
function min(a, b) {
  if(a < b)
  return a;
 else
  return b;
}

console.log(min(0, 10));
console.log(min(0, -10));

/**************************************************/
// PROBLEM 3 - Letter Counting
//
// Write a function called countChar() that takes a string as its first argument, and takes a second argument that indicates a character. The function should then return a Number, representing the number of times that letter occurs in the string.
//
// Your program should output something like the following;

// Your code here.

//Create function for word and letters to be found in word.
//Make variable to start counting letters that starts at 0.
//Make a for loop to go through the word, then use charAt to pinpoint letter in the word. Make it(ch) equal to whatever letter you're looking for.
//Use the count variable to add up how many letters are in string.
//Return count to show how many "k"s there are.
function countChar(str, ch) {
  var count = 0;
  for (var i = 0; i < str.length; i++)
    if (str.charAt(i) == ch)
      count += 1;
  return count;
}
//Same as above but uses specifically ask for a "B" in the return
function countBs(str) {
  return countChar(str, "B");
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
console.log( countChar("michael", "M") );


/**************************************************/
// PROBLEM 4 - The sum of a range
//
// Write a range function ( 'range()' ) that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
//
// Next, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
//
// Finally, write a sum function ( 'sum()' ) that takes an array of numbers and returns the sum of these numbers.


// Your code here.

function range(start, end, step) {
  var rangeArray = [];
  //if there is no step increment by 1
  if (!step) {step = 1;}

  // First loop will increase by one up until 10 since start(1) is less than end(10)
  // Since second loop has start(5) set greater than end(2) it will decrease by 1 until it gets to 2.
  if (start <= end) {
    for (var i = start; i <= end; i += step) {
      rangeArray.push(i);
    }
      } else {
      for (var i = start; i >= end; i += step) {
        rangeArray.push(i);
      }
    }
  return rangeArray;
}

//takes the range 1, 2, 3...10 in the array then uses var s to add the number 1 - 10.
function sum(array) {
  var s = 0;
  for (var i = 0; i < array.length; i++) {
    s += array[i];
  }
  return s;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));


/**************************************************/
// PROBLEM 5 - Your own loop
//
// Write a higher-order function 'loop()' that provides a way to something like a for loop statement. It takes a value, a test function, an update function, and a body function. Each iteration, it first runs the test function on the current loop value, and stops if that returns false. Then, it calls the body function, giving it the current value. And finally, it calls the update function to create a new value, and starts from the beginning.
//
// When defining the function, you may use a regular loop to do the actual looping.

// Your code here.

function loop(value, testfn, updatefn, bodyfn) {
  let c = true;
  while ( c == true) {
      if (testfn(value) == false) {
          c = false;
          return false;
      }
      bodyfn(value);
      value = updatefn(value);
  }
  return true;
}

// 3 is the starting value
// arrow function used to say testfn must be greater than 0.
// arrow function used to say updatefn will decrease by 1.
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// 1 is the starting value
// arrow function used to say testfn is less than or equal to 10.
// arrow function used to say updatefn with increase by 3.
loop(1, n => n <= 10, n => n + 3, console.log);
// → 1
// → 4
// → 7
// → 10






/**************************************************/
// SUBMISSION
//
// When you have finished with this weeks homework, please write a readme response to the week. You should then add this directory into your git repo, sync it, and provide a link to the repo directory (1 link only), to the HW-4 Submission Forum via Moodle.
/**************************************************/
