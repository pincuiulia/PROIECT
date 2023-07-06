// SHOW PHOTOS BUTTON

// Referință la butonul "Show Photos"
const showButton = document.getElementById('showButton');

// Referință la containerul imaginilor
const imageContainer = document.getElementById('imageContainer');

// Referință la butonul "Delete photos"
const deleteButton = document.getElementById('deleteButton');

// Funcție pentru generarea unei poze aleatorii
function generateRandomImage() {
  // Lista cu numele imaginilor
  const imageList = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];

  // Alege un index aleatoriu din lista imaginilor
  const randomIndex = Math.floor(Math.random() * imageList.length);

  // Crează un element imagine
  const image = document.createElement('img');

  // Setează sursa imaginii folosind calea către folderul "img" și numele imaginii
  image.src = 'assets/img/' + imageList[randomIndex];

  // Adaugă clasa de stil pentru imagine
  image.classList.add('random-image');

  // Adaugă imaginea în containerul dedicat
  imageContainer.appendChild(image);

  // Verifică dacă butonul "Delete photos" este ascuns și îl afișează
  if (deleteButton.style.display === 'none') {
    deleteButton.style.display = 'inline';
  }
}

// Ascultă evenimentul de click pe butonul "Show Photos"
showButton.addEventListener('click', generateRandomImage);


// DELETE BUTTON

// Funcție pentru ștergerea fotografiilor generate
function deletePhotos() {
  // Elimină toate elementele imagine din containerul dedicat
  while (imageContainer.firstChild) {
    imageContainer.removeChild(imageContainer.firstChild);
  }
  
  // Ascunde butonul "Delete photos" după ștergerea fotografiilor
  deleteButton.style.display = 'none';
}

// Ascultă evenimentul de click pe butonul "Delete photos"
deleteButton.addEventListener('click', deletePhotos);


//SETINTERVAL TEXT GLOWY
// Funcție pentru a face textul să strălucească
function makeTextGlowy() {
  const califications = document.querySelectorAll('.califications');

  califications.forEach(function(calification) {
    let isGlowing = false;
    
    setInterval(function() {
      if (isGlowing) {
        calification.style.textShadow = 'none';
        isGlowing = false;
      } else {
        calification.style.textShadow = '0 0 5px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #FF00DD, 0 0 70px #FF00DD, 0 0 80px #FF00DD, 0 0 100px #FF00DD, 0 0 150px #FF00DD';
        isGlowing = true;
      }
    }, 2000);
  });
}

// Apelarea funcției pentru a porni efectul "glowy"
makeTextGlowy();

//SETTIMEOUT PENTRU PLAY BUTTON
// Funcție pentru a face div-ul cu clasa "discover-container" să dispară după 2 secunde(animatia PLAY WHILE READING)
function hideDiscoverContainer() {
  const discoverContainer = document.querySelector('.discover-container');

  setTimeout(function() {
    discoverContainer.style.display = 'none';
  }, 4030);
}

hideDiscoverContainer();

//KEYDOWN

// Ascultă evenimentul keydown al documentului
document.addEventListener('keydown', function(event) {
  // Verifică dacă tasta apăsată este "h" (codul 72 corespunde literei "h" în codul ASCII)
  if (event.keyCode === 72) {
    // Afișează un mesaj pop-up "Hello again!"
    alert('Hello again!');
  }
});


