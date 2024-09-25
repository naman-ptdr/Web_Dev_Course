const coding = ["js", "cpp", "c", "java", "puthon"]
// coding.forEach(function(val){
//     console.log(val);
    
// })            // forEach call back function

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName : "javaScript",
        languageFileName: "js"
    },
    {
        languageName : "java",
        languageFileName: "java"
    },
    {
        languageName : "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
    console.log(item.languageFileName);
})
