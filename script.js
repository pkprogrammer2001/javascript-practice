// let var const....

console.log("hello world");
document.write("Asad ullah");
var asad =2
console.log(asad);

asad = "asad"
asad= "developer";

var asad= 0;
let sad1 = 20;

// hoisting topic

console.log(a);  // hoisted ma var ki value automatic initialize top py hojati hai jis ki wajah sy agr var delcared krna phela kedr use krly to value undefined ati jisko hoisted kehta hain...
var a=20;  // hoisted sirf kaam krti hai var py let py nhi kaam krti...

let yr= "asad"; 
console.log(yr);
// array
let vr =[2,2,3,4,5]
console.log(vr[4]);
//objects
let rs ={
  asad:"develop",
  age: 22,
  uni: "virtual university"
}
console.log(rs.asad);
rs.uni = "vu"
console.log(rs.uni);

//      primitive
let as = 30
var ty;
if (true){
  console.log("hello world");
}else{
  console.log("no world");
}

if (as>40){
  console.log("hello world");
}else if (as>0){
  console.log("hello world 2");
}else{
  console.log("hello world 3");
}

// for and while loop

for (var hf = 10; hf<=20; hf++ ){
  console.log("value hf is: "+hf);
}

var vs=20;
while(vs<30){
  vs++;
  console.log(vs);
}
// function
function sd(fd){
  console.log(fd)
  document.write(` ${fd} `);
}
sd("i am javascript developer;");
sd("hello world");

// lexical enviroment and execution context

function jin(){
  function sa(){
    var ae= 100;
    console.log(ae);
    function bd(){
      console.log(ae);
    }
    
    bd()
  }
  sa()
}
jin();

// execution context EK imaginary box hai jis function k variable function and lexical enviroment hota hai.....

function abcd(){
  var adg="jin"; // mgr yeh is child function ma use kr skta hoon is ko lexical enviroment kehta hain....
  function heloo(){
    var absd=23;   // is ki value ma upr parent function use nhi kr skta 
    console.log(absd);
    console.log(adg);
  }
  heloo();
}
abcd()
