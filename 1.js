var i=0;function timedCount(){postMessage(i+=1),setTimeout("timedCount()",500)}timedCount();
