/* Problem One */
console.log(typeof 6.5)
console.log(typeof "stuff")
console.log(typeof false);

/* Problem Two */
var rows = '';
for (var i = 0; i < 10; i ++) {
  console.log(rows += '#');
}

/* Problem Three*/
for (var i = 1; i < 100; i++) {
  var j = "";
  if ( i % 3 == 0) { j += "Fizz"; }
  if ( i % 5 == 0) { j += "Buzz"; }
  if ( j == "" ) { j = i; }

   console.log(j);
}
