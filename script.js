function calc(){
amount=document.getElementById('kg').value
let temp=document.getElementById('option').value;
let answer=(amount*temp).toFixed(2)
document.getElementById("inp").innerHTML=answer
let img=document.getElementById('img');
switch(temp){
    case "0.91":
        img.src="images/venus.png"
        break
    case "0.38":
        img.src="images/mars.png"
        break
    case "0.16":
        img.src="images/moon.png"
        break
    case "1":
        img.src="images/earth.png"
        break
    case "0.380":
        img.src="images/mercury.png"
        break
    case "2.34":
        img.src="images/jupiter.png"
        break
    case "1.06":
        img.src="images/saturn.png"
        break
    case "0.92":
        img.src="images/uranus.png"
        break
    case "1.19":
        img.src="images/neptune.png"
        break; 
    case "0.06":
        img.src="images/pluto.png"
        break;           
}
}