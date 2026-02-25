1. console.log(Boolean(0));         // false  → 0 is falsy
   console.log(Boolean(""));        // false  → empty string is falsy
   console.log(Boolean("0"));       // true   → non-empty string is truthy, even if it contains "0"
   console.log(Boolean(null));      // false  → null is falsy
   console.log(Boolean(-1));        // true   → any non-zero number (positive or negative) is truthy
   console.log(Boolean(undefined)); // false  → undefined is falsy

2. const count = 0;

  // Check if count is defined (not null or undefined)
  if (count !== null && count !== undefined) {
      console.log(`You have ${count} items.`);
  } else {
      console.log("No items found.");
  }
