const actor = document.getElementById("actor");
const characterName = document.getElementById("characterName");
const characterGender = document.getElementById("characterGender");
const species = document.getElementById("species");
const house = document.getElementById("house");
const img = document.getElementById("img");
const btnNext = document.getElementById("btnNext");
const btnPrev = document.getElementById("btnPrev");
const music = document.getElementById('myAudio');


let dataArr = [];
let clickCounter = 0;
console.log(dataArr);


  


window.addEventListener("DOMContentLoaded", () => {
  
  getData();
  
});

//got to the next character
btnNext.addEventListener('click', () => {
  
    clickCounter++
  
    
    if(clickCounter >= dataArr.length){
      clickCounter = 0;
    }
    
    actor.innerHTML = `Actor: ${dataArr[clickCounter].actor}`
    characterName.innerHTML = `Name: ${dataArr[clickCounter].name}`;
    characterGender.innerHTML = `Gender: ${dataArr[clickCounter].gender}`;
    species.innerHTML = `Species: ${dataArr[clickCounter].species}`;
    house.innerHTML = `House: ${dataArr[clickCounter].house}`;
    img.src = dataArr[clickCounter].image;
    
    music.play();
});
//back to the previous character
btnPrev.addEventListener('click', () => {

  clickCounter --

  actor.innerHTML = `Actor: ${dataArr[clickCounter].actor}`
    characterName.innerHTML = `Name: ${dataArr[clickCounter].name}`;
    characterGender.innerHTML = `Gender: ${dataArr[clickCounter].gender}`;
    species.innerHTML = `Species: ${dataArr[clickCounter].species}`;
    house.innerHTML = `House: ${dataArr[clickCounter].house}`;
    img.src = dataArr[clickCounter].image;

    music.play();
});
//get default data from api
function getData () {

  fetch('http://hp-api.herokuapp.com/api/characters')
  .then(response => response.json())
  .then(data => {
    dataArr = data;
    console.log(data)
    actor.innerHTML = `Actor: ${data[0].actor}`
    characterName.innerHTML = `Name: ${data[0].name}`;
    characterGender.innerHTML = `Gender: ${data[0].gender}`;
    species.innerHTML = `Species: ${data[0].species}`;
    house.innerHTML = `House: ${data[0].house}`;
    img.src = data[0].image;
  });
}