const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
  ];

  const uStreamers = streamers.filter(loleros => {
    if (loleros.gameMorePlayed.includes('Legends')) {
      if (loleros.age > 35) {
        loleros.gameMorePlayed = loleros.gameMorePlayed.toUpperCase();
      }
      return true;
    }
    return false;
  });
  
  console.log(filteredStreamers);