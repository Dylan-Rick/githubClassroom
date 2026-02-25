1. public class SeasonSwitchExample {
     public static void main(String[] args) {
         String season = "summer"; // You can change this value to test

         if (season == null) {
             System.out.println("Season cannot be null.");
             return;
         }

         // Normalize input to lowercase to make matching case-insensitive
         switch (season.toLowerCase()) {
             case "spring":
                 System.out.println("Flowers are blooming! It's spring.");
                 break;
             case "summer":
                 System.out.println("Time for the beach! It's summer.");
                 break;
             case "fall":
                 System.out.println("Leaves are falling! It's fall.");
                 break;
             case "winter":
                 System.out.println("Bundle up! It's winter.");
                 break;
             default:
                 System.out.println("Unknown season: " + season);
       }
    }
 }

2. let day = 5; // Change this value to test different days

   switch (day) {
      // Weekend: Sunday (0) and Saturday (6)
      case 0:
      case 6:
          console.log("weekend");
          break;

    // Weekdays: Monday (1) to Friday (5)
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("weekday");
        break;

    // Invalid day values
    default:
        console.log("Invalid day value. Use 0 (Sunday) to 6 (Saturday).");
}
