/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 


* 2. 


* 3. 

* 4. 
explicit: call, apply, bind

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this)

// Principle 2

// code example for Implicit Binding
const student = {
    name: "Carlos",
    age: 31,
    food: "lentils",
    cook: function() {
      return `${this.name} loves to cook ${this.food}`;
    }
  } 
  console.log(student.cook);

// Principle 3

// code example for New Binding

const car = {

}

// Principle 4

// code example for Explicit Binding

const soldier = {
    "name":"Ricky"
  }
  
  function stats(info1,info2,info3){
      return `Soldier ${this.name} has experience with ${info1},${info2},${info3}.`;
  }

const experience =['driving','medical', 'skydiving']
