//1. Employee Login (Scope)

function employeeLogin() {
  if (true) {
    var companyName = "Stackly IT";
    let employeeID = 11;
    const password = "Stackly@3319";
    //Inside the if block
    console.log("Company Name: " + companyName);
    console.log("Employee ID: " + employeeID);
    console.log("Password: " + password);
  }

  //outside the if block
  console.log("Company Name: " + companyName);
  console.log("Employee ID: " + employeeID);
  console.log("Password: " + password);
}

employeeLogin();

//ReferenceError: employeeId is not defined in the outside the if block
//ReferenceError: password is not defined in the outside the if block



//2. ATM Machine (Hoisting)

console.log("using with var");

console.log(accountBalance); //undefined
var accountBalance = 1000;
console.log("Account Balance: ", accountBalance); //1000

console.log("using with let");

console.log(accountBalance1); //ReferenceError: Cannot access 'accountBalance1' before initialization
let accountBalance1 = 2000;
console.log("Account Balance: ", accountBalance1);

console.log("using with const");

console.log(accountBalance2); //ReferenceError: Cannot access 'accountBalance2' before initialization
const accountBalance2 = 3000;
console.log("Account Balance: ", accountBalance2); //3000



//3. Food Delivery App (Named Function)

function orderFood(foodName) {
  console.log("Order Placed : " + foodName);
}

orderFood("Chicken Biryani");



//4.WhatsApp Status(Anonymous Function)

let statusUpdate = function (status) {
  console.log("Status Updated : " + status);
};
statusUpdate("Busy in a meeting");




// 5.Weather App (Arrow Function)
let getWeather = (city, temperature) => {
  console.log(city + "Temperature is " + temperature + "°C");
};
getWeather("Chennai", 36);



//6. Flipkart Offer (IIFE)

(function () {
  console.log("Today's Offer");
  console.log("Flat 60% Discount");
})();




//7. Online Payment (Higher Order + Callback)

function paymentSuccess() {
  console.log("Payment Successful");
}

function makePayment(callback) {
  console.log("Payment Processing...");
  callback();
}

makePayment(paymentSuccess);



//8. YouTube Playlist (Generator Function)

function* youtubePlaylist() {
  yield "video1";
  yield "video2";
  yield "video3";
  yield "video4";
  yield "Playlist Completed";
}
const playlist = youtubePlaylist();
playlist.next().value; // "video1"
playlist.next().value; // "video2"
playlist.next().value; // "video3"
playlist.next().value; // "video4"
playlist.next().value; // "Playlist Completed"




//9.Student Result (Return)

function calculateTotal(marks) {
  let total = 485;
  return total;
}

let totalMarks = calculateTotal();
console.log("Total Marks: " + totalMarks);




//10. Shopping Cart (Return)

function cartTotal(price1, price2, price3) {
  let total = price1 + price2 + price3;
  return total;
}

let totalCartValue = cartTotal(100, 200, 300);
console.log("Total Amount: " + totalCartValue);




//11. Salary Calculator (Uncurrying)

function salary(basic, hra, bonus) {
  return basic + hra + bonus;
}

let totalSalary = salary(50000, 5000, 3000);

console.log("Total salary:", +totalSalary);



//12. Food Bill (Currying)

function foodBill(food) {
  return function (drinks) {
    return function (dessert) {
      return food + drinks + dessert;
    };
  };
}

let totalbill = foodBill(200)(100)(80);
console.log("Total Bill :", +totalbill);



//13. E-commerce Coupon Generator

function* couponGenerator() {
  yield "WELCOME10";
  yield "SAVE20";
  yield "SUPER30";
  yield "MEGA50";
  return "No More Coupons";
}

let coupons = couponGenerator();




// Display Coupons
console.log(coupons.next().value); // WELCOME10
console.log(coupons.next().value); // SAVE20
console.log(coupons.next().value); // SUPER30
console.log(coupons.next().value); // MEGA50
console.log(coupons.next().value); // No More Coupons




//14. Bank Transaction (Higher Order + Callback)

function bankTransaction() {
  console.log("Transaction Successful");
}

function withdraw(callback) {
  console.log("Processing......");
  callback();
}

withdraw(bankTransaction);



//15. Employee Profile (Scope)

function companydetails() {
  if (true) {
    var company = "stackly";
    let designation = "MERN Developer";
    const salary = 50000;
  }
  
  //Accessible
  console.log(company);

  //Not accessible(ReferenceError)
  console.log(designation);

  //Not accessible(ReferenceError)
  console.log(salary);

}

companydetails();

//Explanation

//var : var is function-scoped. 
      //It can be accessed anywhere inside the function.


//let : let is block-scoped.
      //It exists only inside the if block.


//const : const is also block-scoped.
     //It exists only inside the if block.