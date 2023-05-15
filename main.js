let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true
let age = 19
if (registeredEarly && age>18){
  raceNumber += 1000
}
if (registeredEarly && age>18){
  console.log(`You will racing at 9:30am. Your race number is ${raceNumber}.`)
} else if (!registeredEarly && age>18){
  console.log(`You will start racing at 11:00 am. Your race number is ${raceNumber}.`)
} else if(age < 18){
  console.log(`Youth registrants run at 12:30 pm regardless of registration. Your race number is ${raceNumber}.`)
} else{
  console.log('Go see the registration desk')
}