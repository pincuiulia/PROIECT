
  document.addEventListener('DOMContentLoaded', function() {
      // Obține referința la formular
      const form = document.getElementById('myForm');
    
      // Ascultă evenimentul de trimitere a formularului
      form.addEventListener('submit', function(event) {
        // Oprire comportament implicit de trimitere a formularului
        event.preventDefault();
        
        // Obține valorile introduse în câmpurile "Nume" și "Prenume"
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        
        // Stocare valorile în sessionStorage
        sessionStorage.setItem('firstName', firstName);
        sessionStorage.setItem('lastName', lastName);
        
        const messageElement = document.getElementById('message');
        messageElement.textContent = "Thank you " + firstName + " " + lastName + " for submitting!";
      });
    });
    

    
  document.addEventListener('DOMContentLoaded', function() {
      // Obține referința la formular
      const form = document.getElementById('myForm');
    
      // Ascultă evenimentul de trimitere a formularului
      form.addEventListener('submit', function(event) {
        // Oprire comportament implicit de trimitere a formularului
        event.preventDefault();
        
        // Afisează mesajul de pop-up
        const response = window.confirm("Răspunsul tău a fost înregistrat. Vei fi contactat în curând. Dorești să mai faci o comandă?");
        
        // Verifică răspunsul
        if (response) {
          // Refresh la pagină
          window.location.reload();
        }
      });
    });


    //SUBMIT BUTTON 
    // Obține referința la butonul de submit
  const submitButton = document.getElementById('submitButton');

  // Adaugă evenimentul "mouseover" pe buton
  submitButton.addEventListener('mouseover', function() {
    // Modifică stilul butonului
    submitButton.style.backgroundColor = 'grey';
    submitButton.style.fontSize = '30px';
    submitButton.style.color = 'black';
  });

  // Adaugă evenimentul "mouseout" pe buton pentru a reveni la stilul inițial
  submitButton.addEventListener('mouseout', function() {
    // Modifică stilul butonului
    submitButton.style.backgroundColor = '';
    submitButton.style.fontSize = '';
    submitButton.style.color = '';
  });

  //BUTON CULOARE

  // Obține referința la butonul de schimbare a culorii
  const colorButton = document.getElementById('colorButton');

  // Ascultă evenimentul de clic pe buton
  colorButton.addEventListener('click', function() {
    // Generează o culoare aleatoare
    const randomColor = generateRandomColor();

    // Modifică culoarea fundalului paginii
    document.body.style.backgroundColor = randomColor;
  });

  // Funcție pentru generarea unei culori aleatoare
  function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
  }

  //SOCIAL MEDIA

  const socialMediaLinks = document.querySelectorAll('.social-media a');

  socialMediaLinks.forEach(function(link) {
    link.addEventListener('mouseover', function() {
      this.style.backgroundColor = 'green';
      this.style.transform = 'scale(2)';
    });

    link.addEventListener('mouseout', function() {
      this.style.backgroundColor = 'transparent';
      this.style.transform = 'scale(1)';
    });
  });






    
    