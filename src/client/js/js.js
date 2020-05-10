function subForm(name, email, phone, businessName) {
  document.querySelectorAll('#success').forEach((success) => {
    success.innerText =
      'Thank you ' +
      (name || email) +
      '. We will be in contact with you. We look forward to working with your business, ' +
      businessName +
      '.'
  })
}

window.onload = function () {
  document.querySelectorAll('button').forEach((button) => {

/*if (button.innerText.toLowerCase().trim() === 'get in contact') {
      button.addEventListener('click', function () {
        document.querySelector('#sidebar-form').dispatchEvent(new Event('submit'))
      })
    }*/

      // if (button.innerText.toLowerCase().trim() === 'send inquiry') {
      //   button.addEventListener('click', function () {
      //     document.querySelector('#contactForm').dispatchEvent(new Event('submit'))
      //   })
      // }
  })


}

