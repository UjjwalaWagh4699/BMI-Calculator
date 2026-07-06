function calculateBMI(){

let h=document.getElementById("height").value/100;
let w=document.getElementById("weight").value;

let bmi=w/(h*h);

let status="";

if(bmi<16)
status="Severe Thinness";
else if(bmi<17)
status="Moderate Thinness";
else if(bmi<18.5)
status="Mild Thinness";
else if(bmi<25)
status="Normal";
else if(bmi<30)
status="Overweight";
else if(bmi<35)
status="Obese Class I";
else if(bmi<40)
status="Obese Class II";
else
status="Obese Class III";

document.getElementById("result").innerHTML=
"BMI = "+bmi.toFixed(2)+"<br>"+status;

}