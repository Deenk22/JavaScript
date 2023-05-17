const constants = [2.72, 3.14, 9.81, 37, 100];

const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];

const rectangle = {
    width : 20,
    height : 10,
    area : 200,
    perimeter : 60,
};

const users = [
    {
      name: "Brook",
      scores: 75,
      skills: ["HTM", "CSS", "JS"],
      age: 16,
    },
    {
      name: "Alex",
      scores: 80,
      skills: ["HTM", "CSS", "JS"],
      age: 18,
    },
    {
      name: "David",
      scores: 75,
      skills: ["HTM", "CSS"],
      age: 22,
    },
    {
      name: "John",
      scores: 85,
      skills: ["HTML"],
      age: 25,
    },
    {
      name: "Sara",
      scores: 95,
      skills: ["HTM", "CSS", "JS"],
      age: 26,
    },
    {
      name: "Martha",
      scores: 80,
      skills: ["HTM", "CSS", "JS"],
      age: 18,
    },
    {
      name: "Thomas",
      scores: 90,
      skills: ["HTM", "CSS", "JS"],
      age: 20,
    },
  ];


const [e, pi, g, t, eb] = constants; // Asignar elementos de un array a variables es sencillo!
console.log(pi);

const [fin, est, sw, den, nor] = countries; // lo mismo!
console.log(sw);

users.forEach((propiedades, indice) => { // Utilizamos el método o función forEach. Recuerda que esta función
// recibe 3 parámetros en orden (o no...) (item o elemento, index o posición o índice, array). No siempre 
// tenemos que usar los 3, en este caso utilizamos 2. Propiedades, que en este caso hace referencia a las 
// propiedades del objeto e índice que hace referencia a la posición actual de cada objeto.    
    console.log(propiedades); // Aqui puedes ver lo que devuelve cada parámetro.
    console.log(indice); // Aqui puedes ver lo que devuelve cada parámetro.
    let {name, scores, skills, age} = propiedades; // Desestructuramos las propiedades de los objetos (Recuerda
    // que a todas esas propiedades la re-nombramos como "propiedades" y la pasamos como parámetro en el forEach)
    console.log(indice, name, scores, skills, age); // Finalmente
    // clg y vemos que le hemos asignado a cada variable creada en el proceso de desestructuración.
})

const {perimeter} = rectangle;
console.log(perimeter);

const filtro = users.filter((users) => users.scores > 85);
console.log(filtro);


function paraCada(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array);
    }
  }
  
  function funcionCallback(item, index, array) {
    let { name, scores, skills, age } = item;
    name = name;
    console.log(index, name, scores, skills, age);
  }

  paraCada(users,funcionCallback);

  paraCada(users, (item, index) => {
    let { name, scores, skills, age } = item;
    console.log(index, name, scores, skills, age);
  });
  
  