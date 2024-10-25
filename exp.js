const function1 =async (name, age) => {
  setTimeout(() => {
    console.log(`${name} is ${age} years old.`);
  },3000);
};

function1("Iftikar",23);

// const function2=(fn,height)=>{
//   fn();
//   console.log(`His height is ${height}cm tall`);
// }

// function1("Radha",20);

// function2(()=>function1("Iftikar",23),170);

// const function1=()=>{
//   console.log("Helloooooo");
//   return 10;
// }

// const ans=function1();
// console.log(ans);

// const a = setTimeout(() => {
//   console.log("ttttttt");
// }, 5000);

// console.log(typeof(a));  //note that a is an object
