function scuberGreetingForFeet(feet){
  // Write your code here!
 let string;

  if (feet <= 400){
    string = `This one is on me!`
  
  } else if (feet < 2500){
    string = `I will gladly take your thirty bucks.`
  
   } else if (feet >= 2500){
    string = `No can do.`};

return string;
  }

function ternaryCheckCity(city){
  // Write your code here!
let string;

city === `NYC`? (string = `Ok, sounds good.`) : (string = `No go.`);

return string;
}


function switchOnCharmFromTip(tip){
  // Write your code here!

let string;
switch (tip) {
  case `generous`:
  string = `Thank you so much.`;
  break;
  case `not as generous`:
  string = `Thank you.`;
  break;
  case `thanks for everything`:
  string = `Bye.`;
    break; 
}
return string;
}