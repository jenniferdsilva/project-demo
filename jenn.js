// string manipulation 

let str = 'jenn';
let greet = `hie ${str}`;
console.log(greet);


let char = 'hey u there?';      
console.log(char.length);      // gives number of char (variable.length)
console.log(char[4]);           // (variable[]) gives position  of char in a string


let str1 = 'Jennifer'; 
let str2 = 'Dsilva';
let str3 = str1.concat(" " , str2);   // to concat using concat
console.log(str3);
// console.log(str1+ " " + str2);


let firstName= 'Jennifer'

if ('Jennifer' == firstName ) {   // to comapre the vaule stored in a variable
 console.log('Equal');
} else {
console.log('not equal');
}

let statment = 'hey jenn are you there ?';

// let substring = statment.substr( 4,24);     // substr (start,length)
// console.log(substring);


let substring = statment.substring( 4,7);  // substring (start, position till wr u want)
console.log(substring);


  // to know the position of a char 

//  let position = statment.indexOf('jenn');    // used to knw the position of a var or string from start
 let position = statment.lastIndexOf('you');     // used to knw the position of a var or string from end
  console.log(position);


// to remove extra space

let statment1 = ' hey jenn are you there ? ';
let statment2 = statment1.trim();        // to remove  extra space from front and end of a satment
let statment3 = statment1.trimEnd();
let statment4 = statment1.toUpperCase();
let statment5 = statment1.replace('there' , 'fine');   // used to replace there ----> fine
let statment6 = statment1.includes('jennifer');      // use of includes can be used in if..else condition
let statment7 = statment1.includes('jenn');
console.log(statment1);    
console.log(statment2);        
console.log(statment3);        
console.log(statment4);        
console.log(statment5);        
console.log(statment6);        
console.log(statment7);        






