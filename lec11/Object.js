let student={
    name:"Gaurav",
    age:22,
    city:"Nagpur",
};

console.log(student);

// dot Notation
console.log(student.name);

// Bracket Notation
console.log(student["age"]);

// add
student.phone= +912318392893;

// Update
student.age = 33;

console.log(student)


let person ={
    name:"Gauravv",
    age:21,
    address:{
        city:"Silicon City",
        place:"Near Mandir",
        state:"MH"
    }
};
console.log(person);

let array=[a={name:"Aaaa"}, b={name:"Bbbb"}, c={name:"Cccc"}];
console.log(array);

console.log(person.address.state);


let name="Gaurav";
console.log("Hello "+name+" How are ypu?");

console.log(`hello ${name} aaaaaaaa. sssssss. dddd......`)


function greet(name= "Diya"){
    console.log(`Hello ${name}`);
}
greet();

let [a1, b1]= [100,200];
console.log(a1);
console.log(b1);

// let{name,age}=student;
// console.log(student.name);
// console.log(student.age);


 let nums=1;
 function sum(...nums){
    nums=nums+1;
    return nums;
 }   

 console.log(sum(nums));


//  let obj3={
//     a:1
//  }

//  let obj4={
//     b:2
//  }
// let merged



Object.seal(student);
student.age=24;
console.log(student);

const abc = structuredClone(student);
console.log(abc);


