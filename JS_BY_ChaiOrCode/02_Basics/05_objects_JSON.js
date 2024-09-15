// objects and JSON APIs

// destructuring

const course = {
    coursename : "JS in Hindi",
    price : "999",
    courseInstructor : "Hitesh Chodhary",
    platform : "Chai or code Youtube chenal"
}

// console.log(course.courseInstructor)  insted of this we use 


// const{courseInstructor} = course
// console.log(courseInstructor);

const{courseInstructor : instructor} = course
console.log(instructor);

// in react we also use destructuring 

// const navbar = ({company}) => {

// }

// navbar(company = "chi or code")



// APIs     ----->
// from backend we get some values in the form of JSON 
// then how to write this value is called APIs
//  at privious this values comes in the form of XML


// JSON--> Javascript object notation
// {
//     "name" : "naman",
//     "coursename" : "Photo Editing",
//     "price" : "Free"
// }

// [
//     {},
//     {},
//     {}
// ]

// use JSON formator(website) to understand APIs data 

// By using fatch method we call any url and then get some data
// this data values is in APIs 
// then convert this JSON data into object and then use the data