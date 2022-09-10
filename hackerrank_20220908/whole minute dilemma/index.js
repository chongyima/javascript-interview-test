// my solution
const playList = (songs) => {
  let res = 0;
  let jsonSongs = {};
  for (const song of songs) {
    const rest = song % 60;
    jsonSongs[rest] = jsonSongs[rest] + 1 || 1;
  }
  const keys = Object.keys(jsonSongs);
  for (let i = 0; i < keys.length; i++) {
    const gap = jsonSongs[keys[i]] <= 1;
     for (let j = i + gap; j < keys.length; j++) {
      if ((parseInt(keys[i]) + parseInt(keys[j])) % 60 === 0) {
        if (i === j) {
          res += jsonSongs[keys[i]] * (jsonSongs[keys[i]] - 1) / 2;
        } else {
          res += jsonSongs[keys[i]] * jsonSongs[keys[j]];
        }
      }
    }
  }
  return res;
}


const playListOther = (songs) => {
  const map0 = {};
  let c = 0;
  for (const v of songs) {
    if (map0[(60-v%60)%60]) {
      c +=map0[(60-v%60)%60]
    }
    map0[v%60] = (map0[(v%60)] || 0) + 1
  }
  return c;
}

console.log(playList([10,50,90,30]));

console.log(playListOther([10,50,90,30]));