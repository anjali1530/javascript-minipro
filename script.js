let dob=document.getElementById("birthdate");
let currentdate=document.getElementById("currentdate");
let output=document.getElementById("output");
document.getElementById("btn").addEventListener("click",()=>{
    if(dob.value=="" || currentdate.value==""){
output.innerHTML="please select date";
    }
    else{
calculateagedifference(dob.value,currentdate.value);
    }}
);
function calculateagedifference(start,end){

let dobyear=parseInt(start.substring(0,4),10);
let dobmonth=parseInt(start.substring(5,7),10);
let dobdate=parseInt(start.substring(8,10),10);
let currentyear=parseInt(end.substring(0,4),10);
let currentmonth=parseInt(end.substring(5,7),10);
let currentdate=parseInt(end.substring(8,10),10);
let yearagediff=currentyear-dobyear;
let monthagediff;
if(currentmonth>= dobmonth){
monthagediff=currentmonth-dobmonth;
}
else{
    yearagediff--;
    monthagediff= 12+currentmonth-dobmonth;
}
let dateagediff;
if(currentdate>=dobdate){
    dateagediff=currentdate-dobdate;
}
else{
    monthagediff--;
    noofdays=daysInMonth(dobmonth,dobyear);
    dateagediff=noofdays+currentdate-dobdate;

if(monthagediff<0){
    monthagediff=11;
    yearagediff--;
}}
output.innerHTML=yearagediff+"years"+monthagediff+"month"+dateagediff+"days";
}

function daysInMonth(month,year){
    return new Date(year,month,0).getDate();
}