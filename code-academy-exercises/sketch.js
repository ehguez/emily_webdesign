let moonPhase = 'full';

switch (moonPhase) {
  case 'full':
    console.log('Howl!');
    break;
  case 'mostly full':
    console.log('Arms and legs are getting hairier');
    break;
  case 'mostly new':
    console.log('Back on two feet');
    break;
  default:
    console.log('Invalid moon phase');
    break;
}

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.'): console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase ? console.log('I love that!') :  console.log("I don't love that!");



function isGreaterThan (numberOne, numberTwo){
  if (numberOne > numberTwo){
    return true;
  } else {
    return false;
  }
}

isGreaterThan (9,6);
console.log(isGreaterThan());