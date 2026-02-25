1. let access = hasKey ? "allowed" : "denied";

2. let score = 75;
   let result = (score >= 60) ? "pass" : "fail";
   console.log(result);

3. let username = "";
   let displayName = (username.trim() === "") ? "Guest" : username;
   console.log(`Welcome, ${displayName}!`);
