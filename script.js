console.log("Scrirpt");
let client;//1.declaration
client="Caleb";//2.assign
let age=99;
const URL="http://127.0.0.1:5500/index.html";
age=55;

console.log(age);
console.log(URL);

client="Maria";

client="Aaron "; //it uses Aaron because it is the latest "Variable/client"

console.log("client"); // client
console.log("Please, " + client + "visit the site:" + URL);

//template string

//document.write(`Please, ${client} visit the site ${URL}`);

//practice in class

let partnerName;
partnerName="No One";

let jobTitle;
jobTitle="working in the kitchen of a restaurant";

let jobLocation;
jobLocation=" San Diego, CA ";

let numberChildren;
numberChildren="0";

//console.log("You will be a" + jobTitle + " in " + jobLocation + "and married to " + partnerName + " with " + numberChildren + " kids "); 

//practice in class string

//document.write(`You will be a, ${jobTitle} in ${jobLocation} and married to ${partnerName} with ${numberChildren} kids.`);

//Assignment 1

let jobPlace;//1
jobPlace=" The Market: Hawaiian Fresh Seafood "

let jobArea;//2
jobArea=" Mira Mesa "

let jobPosition1;//3
jobPosition1=" front house "

let jobPosition2;//4
jobPosition2=" kitchen "

let jobYear;//5
jobYear=" 1 year "

let schoolName;//6
schoolName=" San Diego Global Knowledge Uni. "

let schoolProgram;//7
schoolProgram=" FSDI "

let classCourse1;//8
classCourse1=" HTML 101 "

let classCourse2;//9
classCourse2=" HTML 102 "

let classCourse3;//10
clasCourse4=" JAVA 103 "

let personalAge;//11
personalAge=" 19 turning 20 "

let familyNumber;//12
familyNumber=" 5 "

let familySiblings;//13
familySiblings=" 2 odler "

let highSchool;//14
highSchool=" Waipahu High School "

let highschoolLocation;//15
highschoolLocation=" Waipahu, Hi "

let videoGame1;//16
videoGame1=" CS:GO "

let videoGame2;//17
videoGame2=" Minecraft "

let videoGame3;//18
videoGame3=" Valorant "

let videoGame4;//19
videoGame4=" R6: Siege "

let videoGame5;//20
videoGame5= "GTA V "

console.log("I work at" + jobPlace + "in" + jobArea + "for" + jobYear + "." + "My job positions were/are" + jobPosition1 + "and" + jobPosition2 + "." + "I am taking classes at" + schoolName + "taking the" + schoolProgram + "program. The courses we have taken so far are" + classCourse1 + "," + classCourse2 + ", and" + classCourse3 + ". I am currently" +  personalAge + "from a family of" + familyNumber + "with" + familySiblings + "I went to  ${highSchool}  in" + highschoolLocation + ". The games I like to play are:" + videoGame1 + "," + videoGame2 + "," + videoGame3 + "," + videoGame4 + "," + videoGame5 + "." )

document.write(`I work at  ${jobPlace}  in  ${jobArea}  for  ${jobYear}.  My job positions were/are  ${jobPosition1}  and  ${jobPosition2}.  I am taking classes at  ${schoolName}  taking the  ${schoolProgram}  program. The courses we have taken so far are  ${classCourse1}  ,  ${classCourse2}  , and ${classCourse3}  . I am currently  ${personalAge}  from a family of  ${familyNumber}  with   ${familySiblings}  I went to  ${highSchool}  in  ${highschoolLocation}  . The games I like to play are:  ${videoGame1}  ,  ${videoGame2}  ,  ${videoGame3}  ,  ${videoGame4}  ,  ${videoGame5}  .`)

/*for(let i=0;i<100;i+=10){
    console.log("i"+i);
}

let j=20
while(j<10){
    console.log("j"+j);
    j++;
}

let counter=20;
do{
    console.log("counter"+ counter);
    counter++;
}while(counter<10);

let userName=prompt("Enter the user name:");
if(userName=="David"){
    console.log("it is the same user");
}else{
    console.log("the users are different");
}

let num1=20
let num2=20

if(num1>num2){
    console.log("Num1 is greater than num2.");
}else{
    console.log("num2 is greater than num1.");
}

let student=true

if(student==true){
    console.log("the user is a student");
}else{
    console.log("the user is not a student");
}*/