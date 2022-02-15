var userName, email, details;
const updateName = () => {
  userName = document.getElementById('name').value.toLowerCase();
};
const updateEmail = () => {
  email = document.getElementById('email').value.toLowerCase();
};
const updateDetails = () => {
  details = document.getElementById('details').value.toLowerCase();
};

document.getElementById('submit').addEventListener('click', (e) => {
  e.preventDefault();
  if ((userName, email, details)) {
    fetch('http://localhost:4000/addUser', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name: userName,
        email,
        details,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          alert(`${userName} added successfully`);
          document.getElementById('name').value = '';
          document.getElementById('email').value = '';
          document.getElementById('details').value = '';
          userName = '';
          email = '';
          details = '';
        }
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    alert('Please enter name, email and details');
  }
});
