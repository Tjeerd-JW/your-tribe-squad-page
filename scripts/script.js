import people from "../assets/people.json" with {type: "json"};
import locations from "../assets/locations.json" with {type: "json"};

// console.log(locations)
console.log(people.people)
var squad = people.people;


var cards = document.getElementById("card-holder");

var card = '';

for (let x in squad) {
    card += `<div class="swiper-slide ">
    <div class="card">
        <div class="album-overlay">
            <h2> <span>` + squad[x].song  +  `</span> - <span>` + squad[x].artist  +  `</span> </h2>
                         <p>` + squad[x].album  +  `</p>
                        </div>
                        <img src="assets/covers/` + squad[x].cover  +  `" alt="album" class="album-img">
                        <div class="card-info">
                            <img src="assets/photos/avatar.png" alt="avatar" class="avatar">

                            <h2>Tjeerd</h2>

                            <a href="" target="_blank" class="card-link">Bekijk kaartje</a>
                        </div>
                    </div>
                </div>
    `
}

cards.innerHTML = card

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // coole effects
  effect: "cards",
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

