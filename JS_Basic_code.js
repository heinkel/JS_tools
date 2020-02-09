

//  Symplifying JavaScript     .map() , .filter() , .reduce()   / basic for most modern programming languages.
// not supported for old Browsers like Internet Explorer 8

# .map();  // for each element in array this applies a function , not necessarily change or affect the value

let numbers  = [6,42,81,33];
numbers.map(() => console.log("Hey!"));   //this will print an Hey for every element in numbers , so four times Hey!

//modifying the numbers

let numbers  = [6,42,81,33];
let newNumbers = numbers.map(element => element * 2 );

console.log(newNumbers);  // this will print
//  [12,84,162,66]   so every element will be double than original array.
console.log(numbers);
//  [6,42,81,33]   remains unchanged

//doing something with the numbers but not modifying 'em 
let numbers  = [6,42,81,33];
let sum = 0;   //we will sum all elements in here
numbers.map( el => sum += el);
console.log(sum);  //them sum of all elements so sum = 162

//.map() with an array of object is capable of modify objects properties, but not when arrays that content integers

let team = [];
team.push({name:"Mio", age:36},{name:"andres",age:30});
team.map(el => el.age +=10);   /// this change value in age for every element.


# .filter(); //clean an array of specific not desired elements. all elements that match function rule inside filter will stay in output

let numbers  = [6,42,81,33];
let newNumbers = numbers.filter(num => num %2 == 0);// returns all even elements filtering odds numbers (ex 81, 33)


#reduce();

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

//Reduce() for get an object example

//having 
var pilots = [
 {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  }
];

var mostExpPilot = pilots.reduce(function (oldest, pilot) {   // this functions return accumulator object at the end.
  return (oldest.years || 0) > pilot.years ? oldest : pilot;
}, {});

console.log(mostExpPilot);  // returns the full object in oldest "the accumulator"

************************************************************************************************************************************************************************************************


#Map Structure
/*  Map declaration and functions */ // in terms of keys 1 and '1' are diferents keys, multiple variable type are supported.

let M = new Map();   //brand new map empty every element will be [k:"key" , v:"value"]

//setting values set map
M.set(element,value); //adds new value and key to map. every key must be unique or overwrite previous.

M.get(element);   // return value for key element.

M.has(element);  // true or false if key exist or not

M.clear();  // cleans all values and keys

M.values(); //return iterators for values in map

M.keys(); //returns iterator over all keys in map

M.size;//returns number of key / value pairs

// MAKING ARRAY from MAP
M.entries();  // returns an array where every element is an dual element array with [k:"key" , v:"value"] whre el.[0] is the key and el.[1] the value useful mixed with for each

/foreach map elements/
for (let element of map.entries())
	if(element[1] === 0)    //if value is o
		cosole.log( element[0])   //return the key. 



************************************************************************************************************************************************************************************************



#OBJECTS
/* OBJECTS*/
//object definition example

let tree = {   //body
	height :10,
	 color: "green",
	 grow() {
	 	this.height +=2;
	 }
};

tree.grow();  // method this do sth
tree.height; // return 12 after first grow, this returns an internal value


/* CREATING a NEW OBJECT*/

var Obj = {a:1,b:"x"};

var ObjCopy = Object.assign({},Obj); //son now ObjCopy is a  new onject copy of Obj, if we dont include {} is just a new reference to old object, if we inlcude more object with same
// attributes last object of the list overwrite values in same name properties.

// assign allow to set new value when cloning
var ObjCopyNewProp = Object.assign({},Obj,{b:'newProp'}); //this assign a different value to b property



/** VARIABLE IN STRING   TEMPLATE LITERALS */
let name= "david";
console.log(`Hi , welcome ${name}`);

 // `${a+b}` suport numeric operations.

 /* Objects destructuring */
let obj = {h:100, s:true};  //having this object
let {h,s} = obj;   //we assign respective properties into variables h and s


//OR with out declare variables

({a,b} = {a:'Hello',b:'Jack'});  //THIS IS NOT BY ORDER ; SHOULD BE SAME NAME

//change name to objects properties.

var o = {h:42,s:true};
var {h:foo,s:bar} = o;   // now if I print foo will print 42, but old property h will return undefined error.

// create new properties when destructuning
 var obj = {id:10, name:'jack'};
 let {id = 10, age =20} = obj;  //id is overriden with 42 from obj; property age doesnt exist in obj so is assigned as expected



************************************************************************************************************************************************************************************************


#FUNCTIONS
/***** FUNCTIONS *****/
/* ARROW Functions Delta functions   #arrow  #singleline **/


const add = (x,y) => {
	let sum = x+y;
	return sum;
}

//pattern
//  const name = (parameters int could be  empty) {
//	what the funtions do
//}

const greet = x => "welcome" + x;  //single line function this case no parenthesis

const x = () => aler("hi");  // no parameters one line #inline

/* Slice an array*/

arr.slice(1);  //this will cut first element [0] keeping the rest of element or indicate a second parameter last position to where cut not including last element

************************************************************************************************************************************************************************************************

#LOOPS
/* LOOPS in ECMA6 **/
/***** HANDLING ARRAYS  **///
//   FOREACH in ARRAYS    #foreach//
       					/ Includes a delta function that acts over any element/
row.forEach(el =>{
    dosomehitng(el);
});

//or shorter as

row.forEach(el => console.log(el));

/** ARRAY STRING ITERATION FOR OF  -  also map and set   */

let arr =["x","b","c",4];  //array element
for (let val of arr){
	console.log(val);
}
// strings version

for (let ch of "Hello"){ // characters one-by-one
	console.log(ch);
}


/** Object ITERATION FOR IN */

let obj ={a:1,b:2,c:3};  //inline object
for (let v in obj){
	console.log(v);
}

************************************************************************************************************************************************************************************************


#ARRAYS
// ARRAY LENGHT FUNCTION CALL  #length #long//
/return number of elements in arr value of las element equal to arr.leght-1   when used in for /
arr.length;


for (let i =0; i< arr.length;i++ ) {
	/do something/
};

/*Destructuring an array*/
let z = ['1','2','3'];
let [one,two,three] = z;
console.log(two);

one; //'1'
two; // '2'

/*Destructuring into array  values from Function */

let a = () =>{
	return [1,2,3];
};
let [one,,two] = a();   //1 and 3 values output of a are destrucured into variables one and two. , 2 is lost;


/* swap values*/

let a,b, c=4,d = 8;
[c,d]=[d,c];     // c and d exchange values

[a,b=6] = [2];  // only a is assigned because still undefined; must be inside an array or doesnt work; 


/* Spread operator*/
  // ...id  this will take all rest of element in iterable structure like (x,...arg,z) a is the first element z is the last one and all in ...arg are the others.
  const myFunction = (x,y,x,z) =>{
  		console.log(x+y+z+x);
  };
let arg = [1,2,3]; 
myFunction(...args,4); //...args introduce all elemets in the function in the first three postions 4 enters as las element z.



/* Adding element into the middle of an array*/

let newArr = ['Three','Four'];
let arr = ['One','Two',...newArr,'Five'];  

/* SPREAD in OBJECTS CLON OBJECTS clonobject*/
const obj1 = {foo:'bar', x:42};
const clonedObj = {...obj1};  //new clonedObj contents same values as onj1 but not linked
//this also allow to create objects taking property values from more than one obj
const obj2 = {foo:'deer', x:6, z=0};
const clonedObj = {...obj1,...obj2}; //this assigns all values but repeated properties are overidden by last element


************************************************************************************************************************************************************************************************

#NUMBERS
/* HANDLING BINARY CONVERSION FROM INT NUMBER   #binary*/ 
 while(number > 0){
         moduleResult = (number % 2);
       /  DO SOMETHING(moduleResult);    THIS IS THE ACTUAL NUMBER going from right to left in binary writing/
         number = parseInt(number/2);
  }


  /*  Default Parameters*/ 

  function test =(a,b=3,c=4){
  	return a+b+c;
  }

  /so you can call as/
  test(5); /giving 12 as outcome/

/* as arrow function default parameters*/

const test(a, b=2, c=4) => {
	return a+b+c;
}
let el = "2";   // or el = 2.4 / will be changed to just 2
parseInt(el); //this will change el to an int format this function callback a 2 for this case.

let el = "2";
Number(el);   // this just change to float or int , if el is 2.4 remains 2.5 after Number();
