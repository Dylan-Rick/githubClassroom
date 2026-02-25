1. console.log(Boolean(0));         // false  → 0 is falsy
   console.log(Boolean(""));        // false  → empty string is falsy
   console.log(Boolean("0"));       // true   → non-empty string is truthy, even if it contains "0"
   console.log(Boolean(null));      // false  → null is falsy
   console.log(Boolean(-1));        // true   → any non-zero number (positive or negative) is truthy
   console.log(Boolean(undefined)); // false  → undefined is falsy

2. // Prediction: Declare a constant `count` with value 0
   const count = 0;

   // Prediction: Check if `count` is NOT null and NOT undefined
   // This will be true for 0, so the if block will run
   if (count !== null && count !== undefined) {
       // Prediction: Will log "You have 0 items."
       console.log(`You have ${count} items.`);
   } else {
       // Prediction: This will NOT run because count is defined
       console.log("No items found.");
   }
