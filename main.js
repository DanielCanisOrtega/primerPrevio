document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
    
    var formData = new FormData(this); // Obtiene los datos del formulario
    
    var jsonData = {};
    formData.forEach(function(value, key){
      jsonData[key] = value;
    });

    console.log(jsonData);
    
    fetch('https://24a0dac0-2579-4138-985c-bec2df4bdfcc-00-3unzo70c406dl.riker.replit.dev/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData) // Convierte el objeto a JSON
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      return response.json();
    })
    .then(data => {
      // Maneja la respuesta del servicio si es necesario
      console.log(data);
    })
    .catch(error => {
      // Maneja errores de la solicitud
      console.error('Error:', error);
    });

    window.open('./index.html');
  });
  