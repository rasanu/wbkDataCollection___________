var wbkDataCollection___________;
function runDataCollection () {
  if (typeof Worker !== "undefined") {
    if (typeof wbkDataCollection___________ == "undefined") {
      wbkDataCollection___________ = new Worker("Data_Collection_Script.js");
    }
    wbkDataCollection___________.onmessage = function (event) {
      console.log(event);
      console.log(
        document.querySelector(".payouts-block > .payout:nth-child(1)")
          .innerText
      );
    };
  } else {
    document.getElementById("body").innerHTML =
      "Sorry, your browser does not support Web Workers...";
  }
};
