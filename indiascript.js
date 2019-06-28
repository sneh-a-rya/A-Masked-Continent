var smog = prompt("What is the largest contributing factor to the poor water quality in India? (Untreated Sewage, Agricultural Runoff, Unregulated Small Scale Industry)");
var coal = document.getElementById("coal");


if(smog == "Untreated Sewage") {
coal.append("Yes; while agricultural runoff and the unregulated smale scale industry make a large contribution to the country's current pollution crisis, untreated sewage is the main factor for water pollution in India.");

}
else if(smog == "untreated sewage") {

coal.append("Yes; while agricultural runoff and the unregulated smale scale industry make a large contribution to the country's current pollution crisis, untreated sewage is the main factor for water pollution in India.");
;
}

else if(smog == "untreated Sewage") {
  coal.append("Yes; while agricultural runoff and the unregulated smale scale industry make a large contribution to the country's current pollution crisis, untreated sewage is the main factor for water pollution in India.");
}

else if(smog == "Untreated sewage") {
  coal.append("Yes; while agricultural runoff and the unregulated smale scale industry make a large contribution to the country's current pollution crisis, untreated sewage is the main factor for water pollution in India.");
}

else{
coal.append("While agricultural runoff and the unregulated smale scale industry make a large contribution to the country's current pollution crisis, untreated sewage is the main factor for water pollution in India.");
}




var button2 = document.getElementById("secQues");
button2.addEventListener("click", readMore);

var secQuest = " ";
	
function readMore(){
    secQuest = prompt("How does India's poor water quality human health(Cholera, dysentery, tuberculosis)?");
    if(secQuest == "All of the above") {
      document.getElementById("newLines").append("Trick Question! It's all of the above. India does generally has low levels of health, which is a direct affect of water pollution. The dirty water is also very fatal to crops, which cuts of many food sources for the population. The contaminated water, is a cause of many severe health problems such as cancer, loss of vision, depletion of calcium from bones, tuberculosis, and many other sever medical conditions.");
      
      }
  
  else{
        document.getElementById("newLines").append("Trick Question! It's all of the above. India does generally has low levels of health, which is a direct affect of water pollution. The dirty water is also very fatal to crops, which cuts of many food sources for the population. The contaminated water, is a cause of many severe health problems such as cancer, loss of vision, depletion of calcium from bones, tuberculosis, and many other sever medical conditions.");
  }
}

var button3 = document.getElementById("thirdQues");
button3.addEventListener("click", readOn);

var thirdQuest = " ";

function readOn(){
  thirdQuest = prompt("How does air pollution affect the environment (Negatively/Positively)?");
  
  if(thirdQuest == "Negatively") {
    document.getElementById("newLinez").append("Yes; Water pollution does bring many negative changes to the enviroment. It affects any oceanic life. When the water is seeped into the sea, which also directly  affects a reliable food source for the population. Many migration birds have faced extinction when shunning these rivers. The rate of water pollution is only increasing India, and situation can only get worse.");
  }
  
  else if(thirdQuest == "negatively") {
    document.getElementById("newLinez").append("Yes; Water pollution does bring many negative changes to the enviroment. It affects any oceanic life. When the water is seeped into the sea, which also directly affects a reliable food source for the population. Many migration birds have faced extinction when shunning these rivers. The rate of water pollution is only increasing India, and situation can only get worse.");
  }
    
    
  else {
    
        document.getElementById("newLinez").append("Not exactly; Water pollution actually brings many negative changes to the enviroment. It affects any oceanic life. When the water is seeped into the sea, which also directly affects a reliable food source for the population. Many migration birds have faced extinction when shunning these rivers.The rate of water pollution is only increasing India, and situation can only get worse.");
  }


}


var button4 = document.getElementById("fourthQues");


var fourthQuest = " ";

{
    document.getElementById.append("Yes") 
  }
  
function myFunction() {
  document.getElementById("demo").innerHTML = "There are numerous ways you can help. Soil erosion greatly contributes to pollution, so you can conserve soil by planting more trees, finding better farming methods, etc. If you're not an indian resident, you can also donate to great organizations. Click the WaterAid button to donate.";
}









