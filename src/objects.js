const createPerson = (name, age) => {
  // your code here
  const person = {
    name,
    age
  };
  return person;
};

const getName = object => {
  // your code here
  return object.name;
};

const getProperty = (property, object) => {
  // your code here
  return object[property];
};

const hasProperty = (property, object) => {
  // your code here
  return !!object[property];
};

const isOver65 = person => {
  // your code here
  if (person.age > 65) {
    return true;
  }
  return false;
};

const getAges = people => {
  // your code here
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  // your code here
  return people.find(person => name === person.name);
};

const findHondas = cars => {
  // your code here
  return cars.filter(car => car.manufacturer === 'Honda');
};

const averageAge = people => {
  // your code here
};

const createTalkingPerson = (name, age) => {
  // your code here
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
