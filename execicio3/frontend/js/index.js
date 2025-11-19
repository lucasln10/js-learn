const listUsers = document.getElementById('list-users');

const getAllUsers = async () => {
    try {
        const response = await fetch('http://localhost:3000/users');
        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

const loadUsers = async () => {
    const users = await getAllUsers();
    if (users && users.length > 0) {
        users.map(user => {
            const listItem = document.createElement('li');
            listItem.className = 'list-item';
            listItem.innerHTML = `
                <span><strong>Nome:</strong> ${user.name}</span>
                <span><strong>Email:</strong> ${user.email}</span>
            `;
            listUsers.appendChild(listItem);
            listUsers.style.border = '1px solid #ccc';
            listUsers.style.padding = '10px';
            listUsers.style.borderRadius = '5px';
            listUsers.style.cursor = 'pointer';
            listItem.addEventListener('click', () => {
                window.location.href = `https://google.com/search?q=${user.name}`;
            });
            listUsers.addEventListener('mouseover', () => {
                listUsers.style.backgroundColor = '#f0f0f0';
            });
            listUsers.addEventListener('mouseout', () => {
                listUsers.style.backgroundColor = '#fff';
            });

        });
    }
}