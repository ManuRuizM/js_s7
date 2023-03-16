const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];


const entrada = document.querySelector('input');

entrada.addEventListener('input', function(event){
    const uStreamers = streamers.filter(loleros =>
        loleros.name.toLowerCase().includes(event.target.value.toLowerCase()));
        console.log(uStreamers);
})