var num1 = "1"
var num2= 1
var isStudent = true
var numArr = [1,2,5,8]
var student = {
    name: "Timi",
    lang: 'javascript'
}

// console.log(student.name)
// console.log(student)
// student.studying = true
// console.log(student)
// student.name = "Timi O"
// console.log(student)

console.log(numArr)
console.log(numArr[2])
numArr[2] = 33
console.log(numArr)
numArr.push(77)
console.log(numArr)
console.log(numArr[5])

if(num2 === num1){
    console.log('its a match')
}
else if (isStudent !== true) {
console.log("Student is true")
}
else {
console.log("no match for you")
}

function isOverTwentyOne(){
    for(var i = 0; i < numArr.length; i++){
        console.log(numArr[i])
        console.log("i counter",i)
        console.log('times 2', numArr[i] * 2)
        var timesTwo = numArr[i] * 2
        if(timesTwo > 21){
            console.log("over 21")
        }
    }
}
isOverTwentyOne()

function sum(num1, num2){
    return parseInt(num1) + parseInt(num2)
}

console.log(sum(5, 7))
console.log(parseInt(num1) + parseInt(num2))

var startBtn = document.querySelector("#start-quiz-button").innerHTML="does this work";

console.log(startBtn)

startBtn.addEventListener("click", function(e){
    console.log(e)
    console.log('clicked')

    console.log(sum(8,9))
})

function myPractice (){
return "practice";
}

myPractice()