//1
//define variables
let name1 = prompt("Enter your Name: ");
let age1 = prompt("Enter your age: ");
let distance1 = prompt("Enter your distance to work: ");
let days1 = prompt("Enter Work Days: ");
let wage1 = prompt("Enter amount of money you earn every Month: ")
let spend1 = prompt("Enter amount of money you spend in month")
let gasoline1 = prompt("Enter money you spend on Gasoline")

//print them for any additional info
console.log(name1);
console.log(age1);
console.log(distance1);
console.log(days1);
console.log(wage1)
console.log(spend1)
console.log(gasoline1)

//if else statements
if(age1 < 16){
    console.log("Please Get a permission from parent or guardian");

}else{
    if(age1 > 16 && age1 < 65)
        console.log("Here's some recomendations u can see!");
}

if(distance1 > 0 && distance1 < 5){
    console.log("Recomended Transport Is Bicycle");
}else if(distance1 > 5 && distance1 < 20){
    console.log("Recomended Transport is car");
}else{
    console.log("Recommended Transport is Train");
}

if(days1 >= 1){
    console.log("Train's ticket price would be 5$ instead of 10$");
}else{
    console.log("NO BENEFITS!");
}

if(wage1 <= 2000){
    console.log("Your wage is too low")
}else if(wage1 <= 4000){
    console.log("Your wage is normal")
}else if(wage1 <= 6000){
    console.log("Your wage is pretty good!")
}else{
    console.log("U FUCKIGN WEALTHY GIMME SOME MONEY BITCH")
}

if(spend1 >= 1000){
    console.log("You don't have a big amount of spended money good!")
}else if(spend1 >= 2000){
    console.log("It's a little bit normal amount of spended money")
}else if(spend1 >= 4000){
    console.log("U AIN'T ON UR WAY CHILL OUT DAMN")
}else{
    console.log("U THINK U MILLIONAIRE?")
}



