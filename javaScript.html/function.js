// // function in java script
// function avg(a, b) {
//     c = (a + b) / 2;
//     return c;
// }
// c1 = avg(4, 6);
// c2 = avg(10, 20);
// console.log(c1, c2);

// //conditionals
// //if-else
// var age = 28;
// if (age > 20) {
//     console.log('you are good');
// } else {
//     console.log('you are bed');
// }

// // if-else if
// if (age > 10) {
//     console.log('connot drive');
// } else if (age > 22) {
//     console.log('can drive');
// } else {
//     console.log('do not drive');
// }


// //LOOP/////////////
// //for loop
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// // while loop
// let j = 0;
// while (j < arr.length) {
//     console.log(arr[j]);
//     j++;
// }

// //do while loop
// let nums=[33,44,22,11];
// let k=0;
// do{
//     console.log(arr[k]);
//     k++;
// }while(k<nums.length);


// // break*****************
// let a=[11,22,33,44]
// for(let i=0;i<a.length;i++){
//     if(i==2){
//         break;
//     }
//     console.log(a[i]);
// }

// // continue****************
// let b=[10,20,30,40,50]
// for(let j=0;j<b.length;j++){
//     if(j==2){
//         continue;
//     }console.log(b[j]);
// }

// // Data and time 
// let myDate=new Date();
// console.log(myDate);
// console.log(myDate.getTime());  //given in second
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());


// Dom Manipulation
let a=document.getElementById('click');
//console.log(a);


let c=document.getElementsByClassName("container");
//console.log(c);
//c[0].style.background="yellow";
// c[0].classList.add("net");
// c[0].classList.add("text_succ");

// c[0].classList.remove("text_succ");
// c[0].innerHTML;

// console.log(a.innerHTML);
// console.log(a.innerText);

// console.log(c[0].innerHTML);
// console.log(c[0].innerText);

 tn=document.getElementsByTagName("buttom");
 console.log(tn);
 sn=document.getElementsByTagName('div');
 console.log(sn);

//   creat element************************
createElement=document.createElement('p');
createElement.innerText="this is created para";
sn[0].appendChild(createElement);
      //replace text*************
// createElement2=document.createElement('b');
// createElement2.innerText="this is created bold";
// sn[0].replaceChild(createElement2,createElement);


// remove child(element)  - remove element
   











