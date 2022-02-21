// কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।

const firstName = 'Rowshon'
const lastName = 'Ara';
const FullName = firstName + ' ' + lastName
// FullName = lastName + firstName
console.log(FullName)

// with const you can't change variable


let roll3 = 'Rowshon Ara'
let roll4 = 'Tamanna'
roll4 = 'Tanjila'
let roll19 = 'Sumi'

let student = roll19 + ',' + roll3 + ',' + roll4
student = roll3 + ',' + roll4
console.log(student)

// ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 
let roomMate = 'Disgusting Woman'
let position = 'talking'
let update = `${roomMate} ${position}`
console.log(update)

const introduction = {
    nam: 'Queen',
    age: 27,
    address: "Ajabpur",
    qalification: 'illiterate',
    occupation: 'sleeping'
}
const introduc = {
    nam: 'Rowdhon Ara',
    age: 27,
    address: "Khulna",
    qalification: 'graduation',
    occupation: 'freelancer'
}

const paragraph = `Once upon a time there was a ${introduction.nam}. Her age was ${introduction.age}. She lives in ${introduction.address}.`
console.log(paragraph)
const para = `Once upon a time there was a ${introduc.nam}. Her age was ${introduc.age}. She lives in ${introduc.address}. Now she is a ${introduc.occupation}`
console.log(para)


