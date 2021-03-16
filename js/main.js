'use strict'

  alert('Welcome to my Quiz Game !!')

let whatName =prompt('Do you know my name ?');

if(whatName.toLowerCase() === 'yes' || whatName.toLowerCase() === 'y')
{
  alert('thank you');
}else if(whatName.toLowerCase() === 'no' || whatName.toLowerCase() === 'n')
{
  alert('My name is Sarah Dagamseh');
}

let age =prompt('Do you know how old I am ?');

if(age.toUpperCase() === 'YES' || age.toUpperCase() === 'Y')
{
  alert('Great!!');
}
else if(age.toUpperCase() === 'NO' || age.toUpperCase() === 'N')
{
  alert ('Its 31');
}
let uni =prompt('Do you know the name of university i graduated from?');

if(uni.toUpperCase() === 'YES' || age.toUpperCase() === 'Y')
{
  alert('you know me very well');
}
else if(uni.toUpperCase() === 'NO' || age.toUpperCase() === 'N')
{ 
  alert( 'Its yarmouk university');
}

let job =prompt('do you know what is my past job experience?');
if(job.toUpperCase() === 'YES' || job.toUpperCase() === 'Y')
{
  alert('well done');
}
else if(job.toUpperCase() === 'NO' || age.toUpperCase() === 'N')
{
  alert('I was a customer Services');
}

let hobby =prompt('do you know what is my hobby?');
if(hobby.toLowerCase === 'yes')
{
  alert('that is awsome');
}
else if(hobby.toLowerCase() === 'no' || whatName.toLowerCase() === 'n')
{
  alert('I love drawing');
}




