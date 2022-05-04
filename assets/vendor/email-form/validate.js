(function () {
  "use strict";

  let forms = document.getElementById("contact-form");
  forms.addEventListener("submit", email_form_submit)

  function email_form_submit(e) {
    e.preventDefault();
    emailjs.sendForm('service_bnymd9t', 'template_nci1wia', this).then(function() {
      console.log('SUCCESS!');
      forms.querySelector('.sent-message').classList.add('d-block');
      forms.reset(); 
    }, function(error) {
      console.log('FAILED...', error);
      displayError(forms, error);
    });
    // fetch(action, {
    //   method: 'POST',
    //   body: formData,
    //   headers: {'X-Requested-With': 'XMLHttpRequest'}
    // })
    // .then(response => {
    //   if( response.ok ) {
    //     return response.text()
    //   } else {
    //     throw new Error(`${response.status} ${response.statusText} ${response.url}`); 
    //   }
    // })
    // .then(data => {
    //   thisForm.querySelector('.loading').classList.remove('d-block');
    //   if (data.trim() == 'OK') {
    //     thisForm.querySelector('.sent-message').classList.add('d-block');
    //     thisForm.reset(); 
    //   } else {
    //     throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action); 
    //   }
    // })
    // .catch((error) => {
    //   displayError(thisForm, error);
    // });
  }

  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }

})();
