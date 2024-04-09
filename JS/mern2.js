/* // let i=10;
// let j=20;
// console.log(i+j+n)

function func(n,m){
    let i=10;
    let j=20;
    console.log(i+j+n) 
}
func(1,2) //31

function fun(n,m,p){
    let i=10;
    let j=20;
    console.log(i+j+p) 
}
fun(1,2) //31
function fun(){
    document.write("Hey I'm JS")
}*/
document.write("hello","IM there");
function fun2(){
    document.write("<h1>Each are <h1> <p>lorem2</p>")
} 

function fun(){
    // console.log(document.getElementById("myh3"));

    // document.getElementById("myh3").textContent="Yes i changed uh bro";
    // document.getElementById("myh3").style.color="Yellow";

    // let txt=document.getElementById('textBox').value;
    // document.getElementById("myh3").textContent='yes this is the input : '+txt+" ";

    let txt=prompt('text');
    document.getElementById("myh3").textContent='yes this is the input : '+txt+" ";

    //hiding an element
    document.getElementById('picu').style="display:none"; //Recommended
    // document.getElementById('picu').style="visibility:hidden";

    let arr1=[1,2];
    arr1.push("hello");
    console.log(arr1);
    console.log(arr1.pop())
    console.log(arr1.reverse()) 
    arr1.shift() //removes the first 
    arr1.unshift('99') //adds at the first


}


