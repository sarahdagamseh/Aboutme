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
  alert
('I was a customer Services');
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

let guess =prompt('guess how many years of experience do I have? betwen (1-10)');
let s=4;
while (s > 0)
{
if (guess >=1 && guess <= 6 ){
alert('your guess is low !' + s + '  attempt');
guess = prompt ('guess how many years of experience do I have? betwen (1-10)');
x--;
continue;
}
 else if (guess >=8 && guess <=10){
  alert('your guess is high !' + s + '  attempt');
 guess = prompt ('duess my experience years from 1 -10');
 s--;
 continue;}

 else if (guess==7){
 alert ('you are right');
 break;
 
}
else {
  alert('your guess soo far !' + s + '  attempt');
 guess = prompt ('guess my experience years from 1 -10');
 s--;
 continue;
}
}






let bank = prompt('write name of any bank you know');
let x = 5;
for (let i = 0; i < 6; i++) {
  switch (bank) {
  case 'Bank of Jordan':
    alert('your answer is correct');
    countScore++;
    break;
  case 'Jordan Commercial Bank':
    alert('your answer is correct');
    countScore++;
    break;
  case 'Jordan Kuwait Bank':
    alert('your answer is correct');
    countScore++;
    break;
  case 'Al-Itihad Bank':
    alert('your answer is correct');
    countScore++;
    break;
  default:
    alert('your answer is wrong, you have ' + x + '  attempts');
    x--;
    bank = prompt('write name of any bank you know');
    continue;
   }
   }
    alert('the correct answer is:  Bank of Jordan, Jordan Commercial Bank, Jordan Kuwait Bank, Al-Itihad Bank ');
    alert('your final  score is:  ' + countScore);