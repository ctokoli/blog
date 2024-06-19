document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  let form = event.target;
  let formData = new FormData(form);
  
  fetch(form.action, {
    method: 'POST',
    headers: {
      'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
    },
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.errors) {
      // Display errors
      console.log(data.errors);
      // let errorExplanation = document.getElementById('error_explanation');
      // errorExplanation.innerHTML = '<ul>' + Object.keys(data.errors).map(key => 
      //   '<li>' + key + ' ' + data.errors[key].join(', ') + '</li>').join('') + '</ul>';
    } else {
      // Handle success, like redirecting
      window.location.href = data.location;
    }
  })
  .catch(error => console.error('Error:', error));
});

// console.log('Hello from script.js');


// window.onload = function() {
//   const form = document.querySelector('form');
//   console.log(form);
// }