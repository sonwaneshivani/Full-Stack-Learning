let myObj={}
let orders=[123,234,12234,56890]

let obj={'name':'bag','brand':'louis vuitton','price':10000} //object
for(let key in obj){
    console.log("Key is "+key);
    console.log(obj[key])
}
obj['hii']='hello';
console.log("Keys : "+Object.keys(obj))

//Object array
let objArray=[
    {"name":'shivi','class':'btech'},
    {"name":'shuva','class':'wro'},
    {"name":"sl",'class':'fs'}
]
console.log();
console.log("Object traversing");
for(let i=0;i<objArray.length;i++){
    console.log(objArray[i]);
    for(let j in objArray[i]){
        console.log("Values : "+j+" : "+objArray[i][j]);
    }
}

let arr={num:12,school:'jmhs'}
for(let key in arr){
    console.log("ARR Key is "+key);
    console.log(arr[key])
}

//Creating myjson that comes from server
let myjson=`{"name":"sp","col":"kmit"}`; //This is treated as string
console.log(myjson.name) //undefined
console.log(JSON.parse(myjson))
//method - 1
let jsonToObj=JSON.parse(myjson);
console.log("To obj "+jsonToObj.name)
//method - 2
let jsonToStr=JSON.stringify(myjson);
console.log("Stringify : "+jsonToStr)
console.log(typeof jsonToStr)
