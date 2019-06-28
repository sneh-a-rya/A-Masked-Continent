var smog = prompt("What is the main factor that manly contrbutes to Pakistan's land pollution. (Deforstation, Plastic, Minning, Landfills )");
var land = document.getElementById("land");


if(smog == "Landfills") {
land.append("Correct! According to Kanwal Shazia Chaudhry, a Medical Doctor in a New York-based Northwell Health, factories and hospitals dispose thousands of tons of waste in the lakes and river streams on daily basis. Similarly, the lack of proper waste management system, allocated landfills sites and negligence on local municipal corporations and public are main causes of waste dumped openly on roads and streets.");
}
else if(smog == "land fills") {

land.append("Correct! According to Kanwal Shazia Chaudhry, a Medical Doctor in a New York-based Northwell Health, factories and hospitals dispose thousands of tons of waste in the lakes and river streams on daily basis. Similarly, the lack of proper waste management system, allocated landfills sites and negligence on local municipal corporations and public are main causes of waste dumped openly on roads and streets.")
}

else if(smog == "Land Fills") {

land.append("Correct! According to Kanwal Shazia Chaudhry, a Medical Doctor in a New York-based Northwell Health, factories and hospitals dispose thousands of tons of waste in the lakes and river streams on daily basis. Similarly, the lack of proper waste management system, allocated landfills sites and negligence on local municipal corporations and public are main causes of waste dumped openly on roads and streets.")
}

else if(smog == "land Fills") {

land.append("Correct! According to Kanwal Shazia Chaudhry, a Medical Doctor in a New York-based Northwell Health, factories and hospitals dispose thousands of tons of waste in the lakes and river streams on daily basis. Similarly, the lack of proper waste management system, allocated landfills sites and negligence on local municipal corporations and public are main causes of waste dumped openly on roads and streets.")
}

else if(smog == "LandFills") {

land.append("Correct! According to Kanwal Shazia Chaudhry, a Medical Doctor in a New York-based Northwell Health, factories and hospitals dispose thousands of tons of waste in the lakes and river streams on daily basis. Similarly, the lack of proper waste management system, allocated landfills sites and negligence on local municipal corporations and public are main causes of waste dumped openly on roads and streets.")
}
else if(smog == "landfills") {

land.append("Correct! According to Kanwal Shazia Chaudhry, a Medical Doctor in a New York-based Northwell Health, factories and hospitals dispose thousands of tons of waste in the lakes and river streams on daily basis. Similarly, the lack of proper waste management system, allocated landfills sites and negligence on local municipal corporations and public are main causes of waste dumped openly on roads and streets.");
}

else{
land.append("Correct! According to Kanwal Shazia Chaudhry, a Medical Doctor in a New York-based Northwell Health, factories and hospitals dispose thousands of tons of waste in the lakes and river streams on daily basis. Similarly, the lack of proper waste management system, allocated landfills sites and negligence on local municipal corporations and public are main causes of waste dumped openly on roads and streets.");
}




var button2 = document.getElementById("secQues");
button2.addEventListener("click", readMore);

var secQuest = " ";
	
function readMore(){
    secQuest = prompt("How does Pakistan's land pollution affect human health?(Loss Of Ecosystems, Problem Of Skin Cancer, Human Respiratory System, or All Of The Above )");
    if(secQuest == "All of the above") {
      document.getElementById("newLines").append("You'r right! When the land is contaminated with toxic chemicals and pesticides lead to problem of skin cancer and human respiratory system. the chemicals can reach their bodies through the foods, spices and vegetables, that they eat as they are grown out of the polluted soil.");
      
      }
  
  else if(secQuest == "All Of The Above") {
      document.getElementById("newLines").append("You'r right! When the land is contaminated with toxic chemicals and pesticides lead to problem of skin cancer and human respiratory system. the chemicals can reach their bodies through the foods, spices and vegetables, that they eat as they are grown out of the polluted soil.");
      }
  
  else if(secQuest == "all of the above") {
      document.getElementById("newLines").append("You'r right! When the land is contaminated with toxic chemicals and pesticides lead to problem of skin cancer and human respiratory system. the chemicals can reach their bodies through the foods, spices and vegetables, that they eat as they are grown out of the polluted soil.");
      
      }
  
  else if(secQuest == "AlL oF tHe AbOvE") {
      document.getElementById("newLines").append("You'r right! When the land is contaminated with toxic chemicals and pesticides lead to problem of skin cancer and human respiratory system. the chemicals can reach their bodies through the foods, spices and vegetables, that they eat as they are grown out of the polluted soil.");
      
      }
  
  else if(secQuest == "aLl Of ThE aBoVe") {
      document.getElementById("newLines").append("You'r right! When the land is contaminated with toxic chemicals and pesticides lead to problem of skin cancer and human respiratory system. the chemicals can reach their bodies through the foods, spices and vegetables, that they eat as they are grown out of the polluted soil.");
      
      }
  
 else if(secQuest == "All") {
      document.getElementById("newLines").append("You'r right! When the land is contaminated with toxic chemicals and pesticides lead to problem of skin cancer and human respiratory system. the chemicals can reach their bodies through the foods, spices and vegetables, that they eat as they are grown out of the polluted soil.");
      
      } 
  
  else if(secQuest == "All of them") {
      document.getElementById("newLines").append("You'r right! When the land is contaminated with toxic chemicals and pesticides lead to problem of skin cancer and human respiratory system. the chemicals can reach their bodies through the foods, spices and vegetables, that they eat as they are grown out of the polluted soil.");
      
      }
  
  else if(secQuest == "All of 'em") {
      document.getElementById("newLines").append("You'r right! When the land is contaminated with toxic chemicals and pesticides lead to problem of skin cancer and human respiratory system. the chemicals can reach their bodies through the foods, spices and vegetables, that they eat as they are grown out of the polluted soil.");
      
      }
  
  else{
        document.getElementById("newLines").append("Auctually it's all of the above. When the land is contaminated with toxic chemicals and pesticides lead to problem of skin cancer and human respiratory system. the chemicals can reach their bodies through the foods, spices and vegetables, that they eat as they are grown out of the polluted soil.");
  }
}

var button3 = document.getElementById("thirdQues");
button3.addEventListener("click", readOn);

var thirdQuest = " ";

function readOn(){
  thirdQuest = prompt("How does land pollution affect the environment (Negatively/Positively)?");
  
  if(thirdQuest == "Negatively") {
    document.getElementById("newLinez").append("Yes; land pollution brings many negative changes to the environment. It can cause speices wipe outs, chemicals in foods, and more. These environmental changes are not only bad for humans, but harm animals and plants as well. When garbage is collected in a pile, animals think of it as food, and they eat the garbage. The garbage can choke them, hurt their intestine, and cause sever damage to themselfs.");
  }
  else if(thirdQuest == "negatively") {
    document.getElementById("newLinez").append("Yes; land pollution brings many negative changes to the environment. It can cause acid rain, visibility loss, and more. These environmental changes are not only bad for humans, but harm animals and plants as well. When acid rain falls over bodies of water, it increases the acidity levels, which causes fatal problems for aquatic life. Air pollution also affects beneficial insects. Minimal changes in the air quality can cause the insects to relocate, taking their valuable qualities with them.");
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
  document.getElementById("demo").innerHTML = "One of the best solutions is to change our bad habits of dispersal of garbage. Also, re-using any items that you can. Items like clothing, bottles, wrapping paper and shopping bags can be used over and over again, rather than buying new things.";
}
