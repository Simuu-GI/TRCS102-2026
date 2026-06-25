let age = 16;
if (age>=18){
    console.log("Eligible to Vote");
}else{
    console.log("Do not eligible");
}


let marks = 87;
if(marks>=80){
    console.log("Grade A");
}else if (marks<=80 && marks >=50){
    console.log("Grade B");

}else if (marks<=50 && marks>=30){
    console.log("Grade C");
}else {
    console.log("Fail");
}


let num = 33;
if (num%2 ==0 && num>0){
    console.log("Even number");
}else{
    console.log("odd number");
}


let day = 2;

switch(day){
    case 1: console.log("Monday")
    break;
    case 2: console.log("Tuesday")
    break;
    case 3: console.log("Wednesday")
    break;
    case 4: console.log("Thrusday")
    break;
    case 5: console.log("Friday")
    break;
    case 6: console.log("Saturaday")
    break;
    case 7: console.log("Sunday")
    break;

    default: console.log("Invalid Input");
}

let amount = 1000;
let discount;

switch(amount){
    case 200: console.log("Discount 10%")
    break;
    case 400: console.log("Discount 20%")
    break;
    case 600: console.log("Discount 30%")
    break;
    case 800: console.log("Discount 40%")
    break;
    case 1000: console.log("Discount 50%")
    break;
    default: console.log("Discount 5%");
}

let amount = 20000;
discount;
