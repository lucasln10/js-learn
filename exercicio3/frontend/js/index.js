
const loadUsers = async () => {
    const listUsers = document.getElementById('list-users');
    try {
        const response = await fetch('http://localhost:3000/users');
        console.log('Response status:', response);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const users = await response.json();
        users.forEach(user => {
                        const listItem = document.createElement('li');
            listItem.className = 'list-item';
            listItem.innerHTML = `
                <span><strong>Nome:</strong> ${user.name}</span>
                <span><strong>Email:</strong> ${user.email}</span>
            `;
            listItem.style.cursor = 'pointer';
            listItem.addEventListener('click', () => {
                window.location.href = `https://google.com/search?q=${user.name}`;
            });
            listItem.addEventListener('mouseover', () => {
                listItem.style.backgroundColor = '#4b4b4bff';
            });
            listItem.addEventListener('mouseout', () => {
                listItem.style.backgroundColor = '#000000ff';
            });
            listUsers.appendChild(listItem);
            });
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadUsers);


