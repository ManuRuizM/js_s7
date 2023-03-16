const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];


const ciudades = cities.map(city =>{
    if(city.isVisited){
        return city.name + '(visitado)';
    }
    return city.name;
})

console.log(ciudades);