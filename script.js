
var sentence= "hello are you doing";
var finder= sentence.search("are")

document.write(finder)

// var replacedText = sentence.replace("are","are you");
// // new string.. 

// document.write("<br>" +replacedText)

var replacer= sentence.replace("are","what are")

document.write("<br>")
document.write(replacer)

// try{
//     document.writes("hellow how are you");

// }
// catch(e){
//     document.write("There is some sort of error you did")

// }

try {
    document.write("<br>")
    document.write("whoa that cool")
    document.write("<br>")
}
catch{
    document.write("<br>")
    document.write("there is some error")
    document.write("<br>")
}


// function add(a , b){
//   return   a+b;

// }

// arrow functions

// add=(a,b)=>a+b
// funcName = (parameter)=>anything

// div=(a,b)=>{
//     var sum = a/b;
//     return sum;
// }

subtract=(a,b)=>a-b

square=(a)=>{
    return a*a

}
cube=(a)=>{
    return a*a*a
}

document.write(cube(6));