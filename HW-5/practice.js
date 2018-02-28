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
