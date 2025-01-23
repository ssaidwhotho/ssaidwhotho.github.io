document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/manqynno', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        alert('Thank you! Your submission has been received.');
      } else {
        alert('Oops! There was a problem submitting your form');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Oops! There was an error submitting your form');
    }
  });