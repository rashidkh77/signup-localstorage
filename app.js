// let student ={
//     stname: "Ahmed",
//     age: "6",
//     email: "ahmed@gmail.com",
//     deitals: ['add','city','postalcode'],
//        classDetail: {
//         shifta:"2-4",

//     }
// }
// let {stname,age,deitals}= student;
// let {shifta} = student.classDetail;


// console.log(student.classDetail.shifta,);
// console.log(stname,age,deitals);

// let search = 'shifta'
// let {[search]: a }=student.classDetail;
// console.log(a);

// function foo(...rest){
// console.log(rest);
// }
// foo("smit","book","food",43,"hi i am para");

// let userName = ["Rashid","Bilal","Ahmed","Sana"];
// let userAge = [42,14,7,30]

// let mergarry = [...userName,...userAge];
// console.log(mergarry);

//  we can create an object from two diffent array .using map method.
// const names = ["Rashid", "Bilal", "Ahmed", "Sana"];
// const ages = [42, 14, 7, 30];

// const users = names.map((name, index) => {
//     return { name: name, age: ages[index] };
// });

// console.log(users);

// how to merge two different Objects
// let student ={
//       stname: "Ahmed",
//     age: "6",
//     email: "ahmed@gmail.com",
//     deitals: ['add','city','postalcode'],
//    }

//    let school = {
//     schoolName: "SMIT",
//     location: "Gulshan",
//     shift: "Shift A",
//    }

// let obj ={name: "Ahmed",
// school:{name:"Saylani"}
// }
// let obj1 = obj;
// let obj2=  JSON.parse(JSON.stringify(obj));

// obj2.school.name="SMIT";
// console.log(obj,obj1,obj2);

// let student ="Ahmed";
// let school = "SMIT";

// let obj = {
//     student,
//     school
// }
// console.log(obj);
//    let mergobject ={...student,...school};
//    console.log(mergobject);

// document.getElementById('next').onclick = function(){
//     const widthItem = document.querySelector('.item').offsetWidth;
//     document.getElementById('formList').scrollLeft += widthItem;
// }
// document.getElementById('prev').onclick = function(){
//     const widthItem = document.querySelector('.item').offsetWidth;
//     document.getElementById('formList').scrollLeft -= widthItem;
// }


// Optional chaining//
// let obj = { 
//     name: "student",
//    school:{
//     name:"SMIT",
//    }
// }
// console.log(obj.school?.detail?.name);
// console.log(obj.name);
// Array method ///

// destrucuting of Array
// const fruits=["apple","bana","mango"];
// const [fruit1,fruit2,fruit3]=fruits;
// console.log([fruit1],[fruit2],[fruit3]);

// Object Destructuring///
// const userProfile={
//     userName: "rashid",
//     userEmail: "rashid@gmail.com",
//     userPassword:"ABC1234"
// }

// const{userName,userEmail,userPassord}=userProfile;
// console.log(userProfile);

// const array1 = ['Mango', 'apple', 'Pinaple'];

// for (const data of array1) {
// //   console.log(data);
// }

// rest operator /// using array 

// const names= ['rashid','bilal','ahmed'];
// function getnames(name1,name2,name3,){
// console.log(name1,name2,name3);
// }
// getnames(...names);

// Rest Operator Using in Object

//  const student= {
//      name:"Rashid",
//      age:43,
//      hobies:["programing","reading",'watching movies']
//  }
// // const {...rest}=student;
// // console.log(rest);
// const newStudent={
//     ...student,
// }
// console.log(newStudent);
// Async & JS Programing CallBack,Promise,Await

// CallBack Fucntion and example

// const datas= [
//     {name: 'Rashid',profession: "Web Developer"},
//     {name: 'Sufiyan',profession: "Software Engineer"},

// ];
// function getdatas  (){
//     let output=""

//     setTimeout(() =>{
//         datas.forEach((datas,index)=>{
//             output+= `<li>${datas.name},${datas.profession}</li>`;

//         })
//         document.body.innerHTML=output;

//     },1000)
//     };

//     function createData(newdata,CallBack){

//         setTimeout(() =>{
//             datas.push(newdata)
//             CallBack();

//         },1000)
//     };
//     createData({name:"Bilal",profession:"Engineer"},getdatas);

//  here we use promise instead of call back //
// const datas = [
//     { name: 'Rashid', profession: "Web Developer" },
//     { name: 'Sufiyan', profession: "Software Engineer" },

// ];
// function getdatas() {
//     let output = ""

//     setTimeout(() => {
//         datas.forEach((datas, index) => {
//             output += `<li>${datas.name},${datas.profession}</li>`;

//         })
//         document.body.innerHTML = output;

//     }, 1000)
// };

// function createData(newdata) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             datas.push(newdata)
//             let error=false;

//             if (!false){
//                 resolve();
//             }else {reject(`khuc to garbar hey`);
//         }
//         })
//     }, 1000)
// };
// using Async and await 
// async function start(){
//     await createData({ name: "Bilal", profession: "Engineer" }).then(getdatas);
// getdatas();
// }
// start();
// createData({ name: "Bilal", profession: "Engineer" }).then(getdatas);

// closer in Javascript///
// Example 1
// var sum = function (a) {
//     console.log("Live users " + a)
//     var c = 3;
//     return function (b) {
//         return a + b + c;

//     }

// }

// var store = sum(400);
// console.log(store(1));
// /example two 
// var sum = function (a, b, c) {
//     return {
//         getsumTwo: function () {
//             return a + b;
//         },
//         getsumThree: function () {
//             return a + b + c;
//             },


//     }

// }

// var store=sum(4, 5, 6);
// console.log(store.getsumTwo());
// console.log(store.getsumThree());

// const greeter=(senderName) =>{
//     return(name) =>{
//         console.log('Hello','${name}', 'from','${senderName}')

//     }
// }
// const fname=name(greeter,'ahmed'),
// const salman=(greeter,'rashid');
// console.log(salman);

