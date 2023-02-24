function displayPrice(value) {
  let prices = [
    "8",
    "12",
    "16",
    "24",
    "36",
  ];

  let pageviews = ["10K pageviews","50K pageviews","100K pageviews","500k pageviews","1M pageviews"];
  
  if (value <= 1) {
    document.getElementById("total-pageviews").innerHTML = pageviews[0];
    document.getElementById("display-price").innerHTML = prices[0];
  } else {
    document.getElementById("total-pageviews").innerHTML = pageviews[value - 1];
    document.getElementById("display-price").innerHTML = prices[value - 1];
  }
}
