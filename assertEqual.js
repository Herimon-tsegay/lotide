const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return true;
  } else   {
    console.log(`🛑  Assertion Failed: ${actual} !== ${expected}`);
  }
  return false;
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);



