const myCar = new Object();
myCar.color = "Gray";
myCar.make = "Mazda";
myCar.model = "CX-5";
myCar.modelYear = "2017";

//general syntax: object.property = value;

console.log(myCar.make);

//A second way of defining an object
const mySecondCar = {
  color: 'Blue',
  make: 'Ford',
  model: 'Ranger',
  modelYear: '2020'
}

console.log(mySecondCar.make);
console.log(myCar['make']);


{
  'squadName': 'Super hero squad',
  'homeTown': 'Metro City',
  'formed': 2016,
  'secretBase': 'Super tower',
  'active': true,
  'members': [
    {
      //Yhis is an array
      //superheroes['members'][0]
      'name': 'Molecule Man',
      'age': 29,
      'secretIdentity': 'Dan Jukes',
      'powers': [
        'Radiation resistance',
        'Turning tiny',
        'Radiation blast'
      ]
    },
    {
      'name': 'Madame Uppercut',
      'age': 39,
      'secretIdentity': 'Jane Wilson',
      'powers': [
        'Million tonne punch',
        'Damage resistance',
        'Superhuman reflexes'
      ]
    },
    {
      'name': 'Eternal Flame',
      'age': 1000000,
      'secretIdentity': 'Unknown',
      'powers': [
        'Immortality',
        'Heat Immunity',
        'Inferno',
        'Teleportation',
        'Interdimensional travel'
      ]
    }
  ]
}

console.log('superheroes');
console.log('superheroes'['hometown']);
console.log(superheroes['members'][0]);
console.log(superheroes['members'][0]['name']);  //Should see molecule Man
console.log(superheroes['members'][0]['powers'][1]]); //Should see Turning Tiny
console.log(superheroes['members'][2]['powers'][1]]); //should see

function addHero(obj) {
  const heroName = "Batman";
  const years = "45";
  const secretID = "Bruce Wayne";
  const abilities = ['technology', 'money', 'armor'];

  const memb = obj['members'];
  console.log(memb);

  memb = [heroName, years, secretID, abilities];
  console.log(memb);
}



//Function
function populateHeader (x) {
  const header = document.querySelector('header');
  const myH1 = document.createElement("h1");

  myH1.textContent = x['squadName'];
  header.appendChild(myH1);

  const myPara = document.createElement('p');
  // myPara.textContent = `Hometown: x['homeTown'] x['formed'];
  myPara.textContent = `Hometown: ${x['homeTown']} // Formed: ${x['formed']}`;

  header.appendChild(myPara);
}

populateHeader[superHeroes];
