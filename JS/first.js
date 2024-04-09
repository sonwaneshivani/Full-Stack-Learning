/*CHECK IN BROWSER BCOZ ALERT, CONFIRM DOESN'T PROPERLY WORK ON VSCODE BUT ON BROWSER*/

// alert("Hello") //One time pop up
console.log("Hello");
console.log("Welcome");

// console=3
// console.log(console); //type error

fullName="Shivani Sonwane";
console.log(fullName);

x=null;
console.log(x) //we know whats inside but is empty

y=undefined;
console.log(y) //we dont know whats inside 

isFollow = true;
console.log(isFollow);

fullName = 4 //dynamically typed lang
console.log(fullName)


/* Let, Const, Var */
var fullName="Hello";
var fullName=true;
var fullName=26;
console.log(fullName);

let age = 4;
// let age=3; Cannot be done
age = 3  //can be done

const num=4;
console.log(num)
// num=3 
// console.log(num)

let a; //By default Undefined
console.log(a); 

let n=BigInt(124);
console.log(n);

console.log(typeof(n));

//Object
const student={
    fullName : "Shivani",
    age : 20,
    cgpa : 8.395,
    isPass : true
};
console.log(student);
typeof(student);
//accessing key of object
console.log(student["fullName"]);
console.log(student.fullName);
//updating
student["age"]+=1;
console.log(student['age']);
student["name"]="Shivi";
console.log(student.fullName);

//object - 1
const Product={
    prodName : "CT Ball Pen",
    rating : 4,
    isDeal : true,
    price : 270,
    offer : 5
};
console.log(Product);

//object - 2
const Profile={
    userName : "@unique.shivi__",
    isFollow : "false",
    isMsg : "false",
    followers : 250,
    following : 230,
    posts : 19,
    shortBio : "Unique",
    bio : "Mysterious & Enchanting"
}
console.log(Profile);


let num1=25;
let num2=6;
console.log("Modulus : ",num1%num2);
console.log("Exponentiation : ",num1**num2);
console.log("Post Increment : ",num1++);
console.log("Pre Decrement : ",--num1);
console.log("Pre Increment : ",++num2); 

console.log("Num & Num : ",5==5);
console.log("Num & String : ",5=='5');
console.log("Num & Num : ",5===5);
console.log("Num & String : ",5==='5');
console.log("Num & String : ",5!=='5');

console.log("Age : ",age);
let res = age>18 ? "adult" : "not an adult";
console.log(res);

let num3=prompt("Enter a number : "); //Can take msg as well as gives prompt 
if(num3%5==0) console.log("Multiple of 5");
else console.log("Not a multiple of 5");

//Loops
for(let i=1;i<=5;i++){
    console.log("Hello");
}

for(let i=1;i<=5;i++){
    console.log("i = ",i);
}

let i=1;
while(i<=10){
    console.log("Hello");
    i++;
}

let j=10;
do{
    console.log("j : ",j);
    j--;
}while(j>=0);

//For-Of loop
let str="Java Script";
for(let i of str){
    console.log("i : ",i);
}

//for-in loop
for (let i in Product){
    console.log(i);
    console.log(student[i]);
}

let actualNum=25;
do{
    userNum=prompt("Guess Num : ");
}while(userNum!=actualNum);
console.log("Congrats. You guessed it");


//Strings
let str1="Java Script"
console.log(str.length);
console.log(str1[7]);

//Template Literals - A spcl string
let sentLit=`This is a template literal`;
let sentNorm="This is the template";
console.log(`The cost of ${Product.name} is ${Product.price}`); //usage
console.log("The cost of ",Product.name, " is ",Product.price);
console.log(`The cost of ${Product.name} is ${1+150}`);

//Escape Characters : Next Line
console.log("Shivani\nSonwane");
console.log("Shivani\tSonwane");
console.log("Shivani\tSonwane".length);

//String methods never change original String but creates new str
let str2="Shivani";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.slice(1,3));

//Generating user name
let userName=prompt("Enter your full name");
console.log("@"+userName+userName.length);

//Arrays - linear
let fruits=["shivi","rushi","pinki"];
let marksObj={
    stu1:91,
    stu2:92,
    stu3:93,
    stu4:94,
    stu5:95
} //Not good approach
let marks=[91,92,93,94,95];
console.log(marks);
console.log(marks.length);
console.log(marks[0]);
console.log(marks[100]); //Undefined
marks[0]=97;
console.log(marks);
for(let i of marks){
    console.log(i);
}

/* Array Methods - Two types
1. Method that changes the array
2. Methods that create a new array
*/
//Push, Pop,toString, Concat(new Arr),Unshift->Pushes at starting, Shift->Pops front ele,slice,splice
marks.push("ruhi",98,23);
console.log(marks.pop()) ;
console.log(marks);
console.log("To String : ",marks.toString()); //Returns a new String
let newArr = marks.concat(fruits);
console.log(newArr);
newArr.unshift("Hello");
console.log(newArr);
console.log(newArr.shift());
console.log(newArr.slice(1,4)); //doesn't modify original

console.log("Array : ",newArr);
//splice - changes original array - parameters(add,remove,replace)
console.log(newArr.splice(2,3,101,102)); //from index 2 we want to delete 3 elements &if given newgets replaced
//If we don't want to delete write 0 there
console.log("After splice : ",newArr);
//add element
newArr.splice(2,0,101);
//delete splice
newArr.splice(3,1);
//Replace
newArr.splice(3,1,101);
//Delete all after 3
newArr.splice(3);
console.log(newArr);
newArr.splice() //Doesn't do anything
console.log(newArr);

let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift();
companies.splice(125,1,"Ola");
companies.push("Amazon");
console.log(companies);


/* Functions */
function sum(n1,n2){
    return n1+n2;
}
console.log("Sum is : ",sum(4,5));

/* Arrow Function */
const add=(n1,n2) =>{
    return n1+n2;
}
let subtract=(n1,n2)=>{
    return n1-n2;
}
console.log("Add : ",add(4,3));
console.log("Subtract : ",subtract(4,3));
subtract=4; //since it is a normal var it can also be changed.

//Vowels
function vowelCount1(str){
    let count=0;
    for(let c of str){
        if(c=='a' || c=='e' || c=='i' || c=='o' || c=='u'){
            count++;
        }
    }
    return count;
}
console.log("vowelCount1 is : ", vowelCount1("Shivani"));


let vowelCount2 = (str) => {
    let count=0;
    for(let c in str){
        if(c=='a' || c=='e' || c=='i' || c=='o' || c=='u'){
            count++;
        }
    }
    return count;
}
console.log("ValueCount2 is : ",vowelCount2("Shivani"));

const printingHello= () =>{
    console.log("print hello");
}
printingHello();

//CallBack func
function abc(){
    console.log("abc");
}
function myFunc(abc){ //callback func
    return abc;
}

//For each loop in Arrays - no need to call
let arr=[1,2,3,4,5];
arr.forEach(function printVal(val){
    console.log(val);
})

arr.forEach(function printing(val){
    console.log(val*10);
})

arr.forEach((val)=>{
    console.log("Hello ",val);
})

//In for each func we can use 3 parameters(optional) - They are val(element),idx(index),arr(Entire arr is passed)
arr.forEach(function printVal(val,idx, arr){
    console.log(val, idx, arr );
})

arr.forEach((val)=>{
    console.log("Square : ",val*val);
})

let calSquare= (val)=>{
    console.log("Square : ",val*val);
}

arr.forEach(calSquare); //can also do this

/* Array Methods */
//1. Map : returns a new array 
arr.map((val)=>{
    console.log(val);
});

