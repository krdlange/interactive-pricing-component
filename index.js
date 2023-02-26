function displayPrice(value) {
  let prices = ["$8.00", "$12.00", "$16.00", "$24.00", "$36.00"];

  let pageviews = [
    "10K pageviews",
    "50K pageviews",
    "100K pageviews",
    "500k pageviews",
    "1M pageviews",
  ];

  if (value <= 1) {
    document.getElementById("slider__title").innerHTML = pageviews[0];
    document.getElementById("slider__amount").innerHTML = prices[0];
  } else {
    document.getElementById("slider__title").innerHTML = pageviews[value - 1];
    document.getElementById("slider__amount").innerHTML = prices[value - 1];
  }
}
