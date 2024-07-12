import { db } from './firebaseConfig.js';
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const docRef = await addDoc(collection(db, 'contacts'), data);
      console.log('Document written with ID: ', docRef.id);
      alert('Message sent successfully!');
    } catch (e) {
      console.error('Error adding document: ', e);
      alert('Error sending message. Please try again.');
    }
  });
});
