"use strict"

const orderClick = () => {

   // Meal Option
   var LegPieceBucketOffer = document.getElementById("optLegPieceBucketOffer");
   var PeriPeriMatchSpecial = document.getElementById("optPeriPeriMatchSpecial");
   var ChickenRoll = document.getElementById("optChickenRolls");
   var ChickenBuckets = document.getElementById("optChickenBuckets");
   var BiryaniBuckets = document.getElementById("optBiryaniBuckets");
   var SmokyGrilledBiryaniCombo = document.getElementById("optSmokyGrilledBiryaniCombo");
   var ClassicBiryaniCombo = document.getElementById("optClassicBiryaniCombo");
   var PopcornBiryaniCombo = document.getElementById("optPopcornBiryaniCombo");

   // Addon's
   var ChocolateLavaCake = document.getElementById("optChocolateLavaCake");
   var VegZingerBox = document.getElementById("optVegZingerBox");
   var SingleChickenRoll = document.getElementById("optSingleChickenRoll");
   var WednesdayStripsBucket = document.getElementById("optWednesdayStripsBucket");

   // Bill Summary
   document.getElementById("lblName").innerHTML = document.getElementById("txtName").value;
   document.getElementById("lblMobile").innerHTML = document.getElementById("txtMobile").value;

   // Meal Details


   var mealName = "";
   var AdonName = "";
   var mealPrice = 0;
   var AdonPrice = 0;

   if (LegPieceBucketOffer.checked) {
      mealName = LegPieceBucketOffer.value;
      mealPrice = 449;
   };

   if (PeriPeriMatchSpecial.checked) {
      mealName = PeriPeriMatchSpecial.value;
      mealPrice = 499.05;
   };

   if (ChickenRoll.checked) {
      mealName = ChickenRoll.value;
      mealPrice = 99;
   };

   if (ChickenBuckets.checked) {
      mealName = ChickenBuckets.value;
      mealPrice = 299;
   };

   if (BiryaniBuckets.checked) {
      mealName = BiryaniBuckets.value;
      mealPrice = 740;
   };

   if (SmokyGrilledBiryaniCombo.checked) {
      mealName = SmokyGrilledBiryaniCombo.value;
      mealPrice = 528;
   };

   if (ClassicBiryaniCombo.checked) {
      mealName = ClassicBiryaniCombo.value;
      mealPrice = 740;
   };

   if (PopcornBiryaniCombo.checked) {
      mealName = PopcornBiryaniCombo.value;
      mealPrice = 690.48;
   };


   // AdOn's Items

   if (ChocolateLavaCake.checked) {
      AdonName += ChocolateLavaCake.value + "<br>";
      AdonPrice += 108.57;
   };

   if (VegZingerBox.checked) {
      AdonName += VegZingerBox.value + "<br>";
      AdonPrice += 313.33;
   };

   if (SingleChickenRoll.checked) {
      AdonName += SingleChickenRoll.value + "<br>";
      AdonPrice += 119.05;
   };

   if (WednesdayStripsBucket.checked) {
      AdonName += WednesdayStripsBucket.value + "<br>";
      AdonPrice += 350.48;
   };


   var total = mealPrice + AdonPrice;
   document.getElementById("lblMeal").innerHTML = mealName;
   document.getElementById("lblAdon").innerHTML = AdonName;
   document.getElementById("lblTotal").innerHTML = total;
}