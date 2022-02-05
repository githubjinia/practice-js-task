// ১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। 


var name = 'Rafsan Saniyat';
var number = 32;
var pass = true;
console.log(name, number, pass);


// ২.জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে।

const animalName = 'Tiger';
let birdName = 'Kukil';
birdName = 'Doyel'
console.log(animalName, birdName);


// ৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো। 


var num1 = 45;
var num2 = 5;

var addNumber = num1 + num2;
var minusNumber = num1 - num2;
var multiplyNumber = num1 * num2;
var devidedNumber = num1 / num2;
var modulusNumber = num1 % num2;

console.log(addNumber, minusNumber, multiplyNumber, devidedNumber, modulusNumber);

// ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো। 


var number1 = 67;
var number2 = 65;

if (number1 < number2) {
    console.log('false');
}
else if (number1 > number2) {
    console.log('true');
}
else if (number1 != number2) {
    console.log('true');
}
else if (number1 == number2) {
    console.log('false');
}
else if (number1 <= number2) {
    console.log('false');
}
else if (number1 >= number2) {
    console.log('true');
}

// ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। 


var age = 34;
var amount = 90000;
if (age < 40 && amount < 100000) {
    console.log('He can go Canada');
}

if (age > 40 || amount < 100000) {
    console.log('He can  go Canada');
}

// ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো 

var isMoneyReady = true;

if (isMoneyReady == true) {
    console.log('Then i will go with you');
}
else {
    console.log('I wont go with you');
}

// ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 

var count = 7;
while (count <= 19) {
    if (count % 2 != 0) {
        console.log(count);
    }
    count++;
}

// ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 

var arrayNumber = [2, 4, 6, 8, 7, 1, 3, 9];
arrayNumber[4] = 5;
arrayNumber.push(2, 1);
arrayNumber.pop();
console.log(arrayNumber);


// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 

var arrayNum = [23, 65, 69, 82, 73, 12, 37, 95];
for (let i = 0; i < arrayNum.length; i++) {
    var result = arrayNum[i];
    console.log(result);
}

// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 

var array = [43, 65, 39, 95, 99, 90];

for (let i = 0; i < array.length; i++) {
    let number = array[i];

    if (number < 80) {
        continue
    }
    console.log(number);
}

// ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 


var case1 = 34;
var case2 = 2;
var case3 = 5;

var totalCase = case1 * case2 * case3;
console.log(totalCase);


// ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 


let person = {
    name: 'Rafa',
    age: 18,
    height: 5.3,
}
person['name'] = 'Rafsan';
console.log(person);


// ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 

function feetToInch(feet) {
    var inch = feet * 12;
    return inch;
}
var hisInch = feetToInch(5.3);
console.log(hisInch);



// ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 

function centimeterToMeter(centimeter) {
    var meter = centimeter / 100;
    return meter;
}
var myMeter = centimeterToMeter(8);
console.log(myMeter);


// ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 
// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 
// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 
// এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 


function paperRequirements(book1, book2, book3) {
    var book1NeedPages = book1 * 100;
    var book2NeedPages = book2 * 200;
    var book3NeedPages = book3 * 300;

    var totalPages = book1NeedPages + book2NeedPages + book3NeedPages;
    return totalPages;

}
var totalPagesNeed = paperRequirements(3, 4, 2);
console.log(totalPagesNeed);

// ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 

var friendsName = ['Shawon', 'Akib', 'Nadia', 'Sharif Ahmed'];

function bestFriend(friends) {
    var contain = '';
    var largest = friendsName[0];
    for (const friend of friends) {
        if (largest.length < friend.length) {
            largest = friend;
        }
    }
    return largest;
}
var friends = bestFriend(friendsName);
console.log(friends);


// ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 

let numbers = [3, 5, 2, 9, 8, -8, 3, 7];
function possitiveNumber(numbers) {
    let numbersArray = [];
    for (const number of numbers) {
        if (number < 0) {
            break;
        }
        else {
            numbersArray.push(number);
        }
    }
    return numbersArray;
}

var getPossitiveNumbers = possitiveNumber(numbers);
console.log(getPossitiveNumbers);


function picnicCost(totalMan) {
    var firstBudget = 5000;
    var secondBudget = 4000;
    var thirdBudget = 3000;
    if (totalMan <= 100) {
        var firstPicnicBudget = totalman * firstBudget;
        return firstPicnicBudget;
    }
    else if (totalMan <= 200) {
        var firstPicnicBudget = 100 * firstBudget;
        var moreMan = totalMan - 100;
        var secondpicnicBudget = moreMan * secondBudget;
        var fullBudget = firstPicnicBudget + secondpicnicBudget;
        return fullBudget;
    }
    else {
        var firstPicnicBudget = 100 * firstBudget;
        var secondpicnicBudget = 100 * secondBudget;
        var moreMan = totalMan - 200;
        var thirdPicnicBudget = moreMan * thirdBudget;
        var fullBudget = firstPicnicBudget + secondpicnicBudget + thirdPicnicBudget;
        return fullBudget;
    }
}
const totalBudget = picnicCost(400);
console.log(totalBudget);