function displayBirthday() {
   const name = document.getElementById('name').value;
   const age = document.getElementById('age').value;
   const dob = new Date(document.getElementById('dob').value);
   const picture = document.getElementById('picture').files[0];

   const reader = new FileReader();
   reader.onload = function (e) {
      document.getElementById('birthdayImage').src = e.target.result;
   };
   reader.readAsDataURL(picture);

   document.getElementById('birthdayName').textContent = `Today is ${name}'s Birthday`;
   document.getElementById('birthdayAge').textContent = `${age} years old`;
   document.getElementById('birthdayDate').textContent = dob.toLocaleDateString();

   document.getElementById('birthdayHeader').style.display = 'block';

   const giftSections = document.querySelectorAll('.gift-section, .footer');
   giftSections.forEach((section) => (section.style.display = 'block'));

   document.querySelector('.form-container').style.display = 'none';

   // Play the audio
   const audio = document.getElementById('birthdayAudio');
   audio.play();
}
