
var quetion = "Q:what is the the averge comptatioal of this numbers (200,300,400,100,50,402,53,958,453,352)"
var one=200;
var two= 300;
var three=400;
var four= 100;
var five=50;
var six=402;
var seven=53;
var egite=958;
var neuen=453;
var then=352;

document.getElementById("question").innerHTML=(quetion)

var realut=one+two+three+four+five+six+seven+neuen+then/10
document.getElementById("one").innerHTML="A:the average computatioal is" + " " + realut;


var profile = {
    cv:"cv",
    name:" Mohammed Alzroug",
    job:" front-end devopler",
}

document.getElementById("cv").innerHTML=(profile.cv);
document.getElementById("name").innerHTML=(profile.name);
document.getElementById("job").innerHTML=(profile.job);

var about = {
    aboutme:"My name is Mohamed Alzroug, i am form Libya and I Am a Front-End devopler",
    email:" Email adress:malzroug@gmail.com",
    phoneNUMBER:" phone Number:0917322826",
}

document.getElementById("aboutme").innerHTML=(about.aboutme);
document.getElementById("email").innerHTML=(about.email);
document.getElementById("phoneNumer").innerHTML=(about.phoneNUMBER);

