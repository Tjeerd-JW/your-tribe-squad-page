import people from "../assets/people.json" with {type: "json"};
import locations from "../assets/locations.json" with {type: "json"};

// console.log(locations)
// console.log(people.people)
let squad = people.people;
let locs = locations.locations;
let swiperInstance = null;
console.log(locations.locations);



let cards = document.getElementById("card-holder");

locationsCards();

document.getElementById("show-locations").addEventListener("click", locationsCards);
document.getElementById("show-squad").addEventListener("click", squadCards);


// HIER BEGINT SQUAD FUNCTION --------------------------
function squadCards() {
  let card = '';
  for (let x in squad) {
    card += `<div class="swiper-slide ">
    <div class="card">
        <div class="album-overlay">
            <h2> <span>` + squad[x].song + `</span> - <span>` + squad[x].artist + `</span> </h2>
                <p>` + squad[x].album + `</p>
          </div>
          <img src="assets/covers/` + squad[x].cover + `" alt="album" class="album-img">
              <div class="card-info">
                <img src="assets/photos/`+ squad[x].name + `.JPG" alt="" class="avatar">
                <h2>`+ squad[x].name + `</h2>
                <a href="`+ squad[x].link + `" target="_blank" class="card-link">Bekijk kaartje</a>
              </div>
        </div>
      </div>
    `
  }
  cards.innerHTML = card
    initSwiper();

}



// HIER BEGINT LOCATIONS FUNCTION --------------------------
function locationsCards() {
  let card = '';
  for (let x in locs) {
    card += `<div class="swiper-slide ">
    <div class="card">
        <div class="album-overlay">
            <h2> <span>` + locs[x].location + `</span> </h2>
          </div>
          <img src="assets/locations/` + locs[x].image + `" alt="location" class="album-img">
              <div class="card-info">       
                <h2>`+ locs[x].name + `</h2>
                <a href="`+ locs[x].link + `" target="_blank" class="card-link">Bekijk locatie</a>
              </div>
        </div>
      </div>
    `
  }
  cards.innerHTML = card

  initSwiper();
}


function initSwiper() {
  if(swiperInstance){
    swiperInstance.destroy(true, true)
  }

  swiperInstance  = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true ,
    // coole effects
    effect: "cards",
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
    }
  });
}




