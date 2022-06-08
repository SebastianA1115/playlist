// Complete Day 1 goals here
//let songList=["Todo de Ti", "Heat Waves", "Hey Mickey", "Atraves Del Vaso"]
//let songArtist=["Rauw Alejandro", "Glass Animals", "Toni Basail", "Banda los Sebastianes"]
//let songLength=["3:35", "3:58", "3:50", "3:03"]
//let songLink=["https://www.youtube.com/watch?v=CFPLIaMpGrY", "https://www.youtube.com/watch?v=mRD0-GxqHVo", "https://www.youtube.com/watch?v=0aqLwHP4y6Q", "https://www.youtube.com/watch?v=0E7KbIy0cIA"]
//let songImage=["https://cdn.glitch.global/0e0fa1f1-1de0-4b6d-8a0c-664c12b3e808/Rauw_Alejandro_-_Todo_de_Ti.png?v=1645659543811", "https://cdn.glitch.global/0e0fa1f1-1de0-4b6d-8a0c-664c12b3e808/download.jpg?v=1645659611577", "https://cdn.glitch.global/0e0fa1f1-1de0-4b6d-8a0c-664c12b3e808/61pfDYN3DSL._SS500_.jpg?v=1645659717438", "https://cdn.glitch.global/0e0fa1f1-1de0-4b6d-8a0c-664c12b3e808/osqdcjn04h3ab_600.jpg?v=1645659710897"]
let song1={
  name:"Todo de Ti",
  artist:"Rauw Alejandro",
  length:"3:35",
  image:"https://cdn.glitch.global/0e0fa1f1-1de0-4b6d-8a0c-664c12b3e808/Rauw_Alejandro_-_Todo_de_Ti.png?v=1645659543811",
  link:"https://www.youtube.com/watch?v=CFPLIaMpGrY",
}  
let song2 ={
  name:"Heat Waves",
  artist:"Glass Animals",
  length:"3:58",
  image:"https://cdn.glitch.global/0e0fa1f1-1de0-4b6d-8a0c-664c12b3e808/download.jpg?v=1645659611577",
  link:"https://www.youtube.com/watch?v=mRD0-GxqHVo",}
let song3 ={
  name:"Hey Mickey",
  artist:"Toni Basail",
  length:"3:50",
  image:"https://cdn.glitch.global/0e0fa1f1-1de0-4b6d-8a0c-664c12b3e808/61pfDYN3DSL._SS500_.jpg?v=1645659717438",
  link:"hhttps://www.youtube.com/watch?v=0aqLwHP4y6Q",
}  
  let song4 ={
  name:"Atraves Del Vaso",
  artist:"Banda Los Sebastianes",
  length:"3:03",
  image:"https://cdn.glitch.global/0e0fa1f1-1de0-4b6d-8a0c-664c12b3e808/osqdcjn04h3ab_600.jpg?v=1645659710897",
  link:"https://www.youtube.com/watch?v=0E7KbIy0cIA",
}
  let playlist= [];
  playlist.push(song1);
  playlist.push(song2);
  playlist.push(song3);
  playlist.push(song4);
function displaySongInfo() {
  // Complete the Day 2 goals inside this function
playlist.forEach(function(song){
        $(".songs").append("<p>"+song.name+"</p>");
        $(".artists").append("<p>"+song.artist+"</p>");
        $(".lengths").append("<p>"+song.length+"</p>");
        $(".links").append(`<a href="${song.link}"target="_blank">Link</a>`);
        $(".images").append(`<img src="${song.image}">`);
    });
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  
  let songAdd = $( ".title" ).val();
  
  let artistAdd = $(".artist") .val();
  
  let imageAdd = $(".image") .val();
  
  let linkAdd = $(".link"). val();

  let lengthAdd =$ (".length"). val();
  
 let newSong = {
  name:songAdd,
  artist:artistAdd,
  length:lengthAdd,
  image:imageAdd,
  link:linkAdd, 
   
}
playlist.push(newSong);
}

$(".add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});
  
displaySongInfo();