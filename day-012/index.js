const utils = {};
utils.at = (path, obj) => {
  // const keysRegex = /(\w+)\['(\w+)'\]*/;
  const keysRegex = /(\w+)(?:\[\'(\w+)\'\]|\.(\w+))*/;
  const keysMatches = path.matchAll(keysRegex);
  return keysMatches;
};

const person = {
  from: {city: 'San Francisco', state: 'CA', country: 'USA'},
  age: 30,
  job: 'admin',
  children: ['billy', 'bob', 'jenny'],
};

console.log([...utils.at('age')][0]);
console.log([...utils.at(`from['city'].state`)][0]);
// console.log(utils.at('children[1]')[0]);
