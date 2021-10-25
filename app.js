// Initialize and add the map
function initMap() {
  const location = { lat: 29.683771153671334, lng: -95.41422646012485 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.querySelector('.google-maps'), {
    zoom: 14,
    center: location,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}

// NAV
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

const toggleNav = () => {
  if (hamburger.classList.contains('is-active')) {
    hamburger.classList.remove('is-active');
    navLinks.classList.remove('active-nav');
  } else {
    hamburger.classList.add('is-active');
    navLinks.classList.add('active-nav');
  }
};

hamburger.addEventListener('click', () => toggleNav());

// BAND CARDS
const bandItems = [...document.querySelectorAll('#bands .bands-item')];
const spotifyLinks = [...document.querySelectorAll('.spotify-link')];
const bgImages = [ 'tpiy2', 'bmth', 'dgdfr', 'dayseeker', 'myka', 'twa', 'wcar', 'architects', 'dayseeker']

bandItems.forEach((band, index) => {
  // BACKGROUND IMAGES
  band.style.backgroundImage = `url("./assets/${bgImages[index]}.jpg")`;

  // EVENT LISTENERS
  band.addEventListener('mouseover', () => {
    spotifyLinks[index].classList.add('spotify-link-active');
  });
  
  band.addEventListener('mouseleave', () => {
    spotifyLinks[index].classList.remove('spotify-link-active');
  });
});

// BANDS SECTION
const bandPageItems = [...document.querySelectorAll('#bands-page .bands-item')];

bandPageItems.forEach((band, index) => {
  // BACKGROUND IMAGES
  band.style.backgroundImage = `url("../assets/${bgImages[index]}.jpg")`;

  // EVENT LISTENERS
  band.addEventListener('mouseover', () => {
    spotifyLinks[index].classList.add('spotify-link-active');
  });
  
  band.addEventListener('mouseleave', () => {
    spotifyLinks[index].classList.remove('spotify-link-active');
  });
});