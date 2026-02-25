1. // Calculate the final price including tax
   const TAX_RATE = 0.0875;
   const finalPrice = price * (1 + TAX_RATE);
   // Determine pricing tier based on final price
   const pricingTier = finalPrice > 500 ? "premium" : "standard";
   // Standard delivery time in days
   const standardDeliveryDays = 14;
