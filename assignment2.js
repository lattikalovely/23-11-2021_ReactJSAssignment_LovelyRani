var arr = [
			{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, 
    		{"Gender": "Male", "HeightCm": 161,"WeightKg":85 }, 
   			{ "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, 
    		{ "Gender": "Female","HeightCm": 166,"WeightKg": 62}, 
			{"Gender": "Female", "HeightCm": 150, "WeightKg": 70},
			{"Gender": "Female","HeightCm": 167, "WeightKg": 82}
         ];
var cat, risk;
for (var i = 0; i < arr.length; i++){
  var obj = arr[i];
  var height = (obj["HeightCm"] / 100);
  var mass = obj["WeightKg"];
  var bmi = (mass / height);
  bmi= Math.round(bmi * 10) / 10
  //document.write("<br> <br>mass: "+mass + ", height: "+height, ", bmi: "+bmi );
  
  if( bmi <= 18.4){
  	cat = "Underweight";
    risk = "Malnutrition risk";
  }
  else if( 18.5 <= bmi && bmi<= 24.9){
  	cat = "Normal weight";
    risk = "Low risk";
  }
  else if( 25 <= bmi && bmi <= 29.9){
  	cat = "Overweight";
    risk = "Enhanced risk";
  }
  else if( 30 <= bmi && bmi <= 34.9){
  	cat = "Moderately obese";
    risk = "Medium risk";
  }
  else if( 35 <= bmi && bmi <= 39.9){
  	cat = "Severel obese";
    risk = "High";
  }
  else if( 40 <= bmi){
  	cat = "Very severely obese";
    risk = "Very high risk";
  }
  //document.write("<br> <br>mass: "+mass + ", height: "+height, ", bmi: "+bmi +", cat: "+cat+", risk: "+risk);
  obj["bmi"] = bmi;
  obj["BMI Category"] = cat;
  obj["Health Risk"] = risk;
  
  arr[i] = obj;
  //document.write("hello");
}
var ctr=0;
for (var i = 0; i < arr.length; i++){
	 var obj = arr[i];
     
     //document.write(arr[i]);
     if((obj["BMI Category"].localeCompare("Overweight")) ==0){
     	ctr = ctr+1;
     }
     
     document.write("<br> <br>Gender: "+obj["Gender"] + ", HeightCm: "+obj["HeightCm"] +", WeightKg: "+obj["WeightKg"]+", bmi: "+obj["bmi"] +", BMI Category: "+obj["BMI Category"]+", Health Risk: "+obj["Health Risk"]);
}
