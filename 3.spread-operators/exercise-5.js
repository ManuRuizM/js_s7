const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 

const arraySpread = [...colors];

arraySpread.splice(2,1);

console.log(arraySpread);