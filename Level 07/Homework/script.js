//input user's informations
const sex = prompt("What's your sex: ")
const age = prompt("What's your age: ")
const wage = prompt("What's your wage: ")

//female example
//if else statement for woman
if(sex == "female"){
    if(age <= 18){
    console.log("Get an education first and start working!")
}else{
    console.log("You're an Adult! You all set")
}
if(wage >= 5000){
    console.log("You don't have to worry about your wage")
}else if(wage <= 5000 && wage >= 3000){
    console.log("Your wage is normal, You need better plan")
}else if(wage < 3000){
    console.log("You have to improve plans for your wage")
}
} 


//male example
//if else statement for man
if(sex == "male"){
    if(age <= 18){
    console.log("Get an education first and start making investitions next!")
}else{
    console.log("You're an Adult!, You all set")
} 
if(wage >= 6000){
    console.log("You are ready for starting investitions!")
}else if(wage <= 6000 && wage >= 4000){
    console.log("Your wage is good and normal")
}else if(wage < 4000){
    console.log("You have to improve plans for your wage")
}
}