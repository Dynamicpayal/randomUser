document.getElementById('generateButton').addEventListener('click', generateRandomUser);

function generateRandomUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            document.getElementById('userAvatar').src = user.picture.large;
            document.getElementById('userName').innerText = `${user.name.first} ${user.name.last}`;
            document.getElementById('userEmail').innerText = user.email;
            document.getElementById('userLocation').innerText = `${user.location.city}, ${user.location.country}`;
            document.getElementById('userContainer').style.display = 'block';
        })
        .catch(error => console.error('Error fetching user:', error));
}
