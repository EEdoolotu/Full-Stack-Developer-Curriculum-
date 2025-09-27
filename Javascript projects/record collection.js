const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

const copiedrecord = {...recordCollection};

function updateRecords(records, id, prop, value) {
  const album = records[id];

  if (value === "") {
    delete album[prop];
  } else if (prop !== "tracks" && value !== "") {
    album[prop] = value;
  } else {
    if (album.hasOwnProperty("tracks")===false) {
      album.tracks = [];
    }
    album.tracks.push(value);
  }
  return records;

}
