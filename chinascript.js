var smog = prompt("Which main factor contributes to China's toxic smog? (Oil, Coal, Building Construction)");
var coal = document.getElementById("coal");


if(smog == "coal") {
coal.append("Yes. Although Oil and Building Construction may be partially true, coal emissions have made a significant change in the poor air quality in China. According to Professor Chai Fahe, coal emissions from major northern cities, such as Hebei, Tianjin, and Hebei, have increased to five times the national average. As a result, China's gained a steady incline in their methane emissions, which traps 28 times more head than carbon dioxide.");

}
else if(smog == "Coal") {

coal.append("Yes. Although Oil and Building Construction may be partially true, coal emissions have made a significant change in the poor air quality in China. According to Professor Chai Fahe, coal emissions from major northern cities, such as Hebei, Tianjin, and Hebei, have increased to five times the national average. As a result, China's gained a steady incline in their methane emissions, which traps 28 times more heat than carbon dioxide.")
;
}

else{
coal.append( "Although Oil and Building Construction may be partially true, coal emissions have made a significant change in the poor air quality in China. According to Professor Chai Fahe, coal emissions from major northern cities, such as Hebei, Tianjin, and Hebei, have increased to five times the national average. As a result, China's gained a steady incline in their methane emissions, which traps 28 times more heat than carbon dioxide.");
}




var button2 = document.getElementById("secQues");
button2.addEventListener("click", readMore);

var secQuest = " ";
	
function readMore(){
    secQuest = prompt("How does China's smog affect human health(Heart Attacks, Asthma Attacks, Bronchitis)?");
    if(secQuest == "All of the above") {
      document.getElementById("newLines").append(" Trick Question! China's air pollution is toxic, and can cause problems with the heart, lungs, and more. Terry Gordon, an NYU Langone Medical Center professor claims 'healthy [people have] less reason to be concerned.' However, 'if you are elderly or a child with asthma, you probably should be.' The particles in China's air may trigger harmful short-term effects in human health, like Bronchitis, but it's the long-term affects that are truly shocking. In 2012, roughly three million people lost their lives due to air-pollution causes. One million people died in just China alone.");
      
      }
  
  else{
        document.getElementById("newLines").append(" Trick Question! China's air pollution is toxic, and can cause problems with the heart, lungs, and more. Terry Gordon, an NYU Langone Medical Center professor claims 'healthy [people have] less reason to be concerned.' However, 'if you are elderly or a child with asthma, you probably should be.' The particles in China's air may trigger harmful short-term effects in human health, like Bronchitis, but it's the long-term affects that are truly shocking. In 2012, roughly three million people lost their lives due to air-pollution causes. One million people died in just China alone.");
  }
}

var button3 = document.getElementById("thirdQues");
button3.addEventListener("click", readOn);

var thirdQuest = " ";

function readOn(){
  thirdQuest = prompt("How does air pollution affect the environment (Negatively/Positively)?");
  
  if(thirdQuest == "Negatively") {
    document.getElementById("newLinez").append("Yes; air pollution brings many negative changes to the environment. It can cause acid rain, visibility loss, and more. These environmental changes are not only bad for humans, but harm animals and plants as well. When acid rain falls over bodies of water, it increases the acidity levels, which causes fatal problems for aquatic life. Air pollution also affects beneficial insects. Minimal changes in the air quality can cause the insects to relocate, taking their valuable qualities with them.");
  }
  
  else if(thirdQuest == "negatively") {
    document.getElementById("newLinez").append("Yes; air pollution brings many negative changes to the environment. It can cause acid rain, visibility loss, and more. These environmental changes are not only bad for humans, but harm animals and plants as well. When acid rain falls over bodies of water, it increases the acidity levels, which causes fatal problems for aquatic life. Air pollution also affects beneficial insects. Minimal changes in the air quality can cause the insects to relocate, taking their valuable qualities with them.");
  }
    
    
  else {
    
        document.getElementById("newLinez").append("Not exactly; air pollution brings many negative changes to the environment. It can cause acid rain, visibility loss, and more. These environmental changes are not only bad for humans, but harm animals and plants as well. When acid rain falls over bodies of water, it increases the acidity levels, which causes fatal problems for aquatic life. Air pollution also affects beneficial insects. Minimal changes in the air quality can cause the insects to relocate, taking their valuable qualities with them.");
  }


}


var button4 = document.getElementById("fourthQues");


var fourthQuest = " ";

{
    document.getElementById.append("Yes") 
  }
  
function myFunction() {
  document.getElementById("demo").innerHTML = "There are numerous ways you can help the air pollution get better. For one, you can monitor China's air quality status with existing apps for the general area of China. Awareness is important. Another strong point is energy conservation. Most of China's electricity is fueled by coal plants, so switching to energy efficient appliances, like LED lights, will help in the long run. Driving a fuel-efficient car, such as a hybrid, also helps. While these are mostly actions for China's residents', if you're a non-resident, there's numerous organizations you can donate to. Click the Greenpeace button to donate.";
}






